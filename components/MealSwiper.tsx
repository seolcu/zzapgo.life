import styles from "./MealSwiper.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useSWR from "swr";

interface MealCardProps {
  data: any;
}

const MealCard = ({ data }: MealCardProps) => {
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

const MealSwiper = () => {
  const year = new Date().getFullYear();
  const month = ("0" + (new Date().getMonth() + 1)).slice(-2);
  const date = ("0" + new Date().getDate()).slice(-2);
  const hours = new Date().getHours();

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=015f0705bbe0482589da35f787d46817&Type=json&pIndex=1&pSize=3&ATPT_OFCDC_SC_CODE=Q10&SD_SCHUL_CODE=8490078&MLSV_YMD=${year}${month}${date}`,
    fetcher,
  );

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
