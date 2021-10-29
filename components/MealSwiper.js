import styles from "./MealSwiper.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useSWR from "swr";

const MealSwiper = () => {
  const year = new Date().getFullYear();
  const month = ("0" + (new Date().getMonth() + 1)).slice(-2);
  const date = ("0" + new Date().getDate()).slice(-2);
  const hours = new Date().getHours();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=015f0705bbe0482589da35f787d46817&Type=json&pIndex=1&pSize=3&ATPT_OFCDC_SC_CODE=Q10&SD_SCHUL_CODE=8490078&MLSV_YMD=${year}${month}${date}`,
    fetcher,
  );

  if (error)
    return (
      <div className={styles.normalWrapper}>
        <h2>오류 발생</h2>
        <div>급식을 가져오는 중 오류가 발생했습니다.</div>
      </div>
    );
  if (!data)
    return (
      <div className={styles.normalWrapper}>
        <h2>오늘 {hours <= 8 ? "아침" : hours <= 14 ? "점심" : "저녁"}</h2>
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

  const mealData = data.mealServiceDietInfo[1].row;
  const parseDataStringIntoList = (dataString) => {
    return dataString.replace(/\./gi, "").replace(/[0-9]/g, "").split("<br/>"); // 태그 제거
  };
  let mealList = [];
  mealData.map((obj) => {
    mealList.push(parseDataStringIntoList(obj.DDISH_NM));
  });

  return (
    <Swiper
      slidesPerView={1}
      centeredSlides={true}
      spaceBetween={-30}
      direction={"horizontal"}
      initialSlide={hours <= 8 ? 0 : hours <= 14 ? 1 : 2}
    >
      <SwiperSlide>
        <div className={styles.menuSwiper}>
          <h2>오늘 아침</h2>
          <ul>
            {mealList[0].map((obj, index) => {
              return <li key={index}>{obj}</li>;
            })}
          </ul>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.menuSwiper}>
          <h2>오늘 점심</h2>
          <ul>
            {mealList[1].map((obj, index) => {
              return <li key={index}>{obj}</li>;
            })}
          </ul>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.menuSwiper}>
          <h2>오늘 저녁</h2>
          <ul>
            {mealList[2].map((obj, index) => {
              return <li key={index}>{obj}</li>;
            })}
          </ul>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MealSwiper;
