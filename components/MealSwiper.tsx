import styles from "./MealSwiper.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import "swiper/css";

const MealCard = ({ data }: any) => {
  const mealType = data.MMEAL_SC_CODE; // 조식: 1, 중식: 2, 석식: 3
  const parseDataStringIntoList = (dataString: string) => {
    return dataString.replace(/\./gi, "").replace(/[0-9]/g, "").split("<br/>"); // 태그 제거
  };
  const menuList = parseDataStringIntoList(data.DDISH_NM);
  return (
    <div className={styles.menuSwiper}>
      <h2>
        {mealType == 1
          ? "아침"
          : mealType == 2
          ? "점심"
          : mealType == 3
          ? "저녁"
          : "???"}{" "}
        급식
      </h2>
      <ul>
        {menuList.map((obj: string, index: number) => {
          return <li key={index}>{obj}</li>;
        })}
      </ul>
    </div>
  );
};

interface MealSwiperProps {
  API: string;
}

const MealSwiper = ({ API }: MealSwiperProps) => {
  const hours = new Date().getHours();
  const { data, error } = useSWR(API);

  if (error) {
    return (
      <div className={styles.normalWrapper}>
        <h2>오류 발생</h2>
        <div>급식을 가져오는 중 오류가 발생했습니다.</div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className={styles.normalWrapper}>
        <h2>{hours <= 8 ? "아침" : hours <= 14 ? "점심" : "저녁"} 급식</h2>
        <ul>
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    );
  }

  try {
    // 급식 있을때
    const mealDataList = data.mealServiceDietInfo[1].row;
    return (
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={-30}
        direction={"horizontal"}
        initialSlide={hours <= 8 ? 0 : hours <= 14 ? 1 : 2}
      >
        {mealDataList.map((mealData: Object, index: number) => {
          return (
            <SwiperSlide key={index}>
              <MealCard data={mealData} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  } catch (e) {
    // 급식 없을때
    return (
      <div className={styles.normalWrapper}>
        <h2>급식 없음</h2>
        <div>급식이 없습니다.</div>
      </div>
    );
  }
};

export default MealSwiper;
