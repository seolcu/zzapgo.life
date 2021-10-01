import Head from "next/head";
import styles from "../styles/Home.module.scss";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Home = ({ mealList }) => {
  const MenuList = (mealType) => {
    let oneMealList = mealList[mealType];
    let JSX = [];
    for (let i = 0; i < oneMealList.length; i++) {
      JSX.push(
        <li key={i.toString()} className={styles.li}>
          {oneMealList[i]}
        </li>,
      );
    }
    return JSX;
  };

  const hours = new Date().getHours();
  return (
    <>
      <Head>
        <title>홈</title>
        <meta name="description" content="홈" />
      </Head>
      <HeaderComponent title="홈" />
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={-30}
        direction={"horizontal"}
        initialSlide={hours <= 8 ? 0 : hours <= 14 ? 1 : 2}
      >
        <SwiperSlide>
          <div className={styles.menuWrapper}>
            <h2>오늘의 아침</h2>
            <ul>{MenuList(0)}</ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.menuWrapper}>
            <h2>오늘의 점심</h2>
            <ul>{MenuList(1)}</ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.menuWrapper}>
            <h2>오늘의 저녁</h2>
            <ul>{MenuList(2)}</ul>
          </div>
        </SwiperSlide>
      </Swiper>
      <ThemeChanger />
      <FooterComponent currentPage="0" />
    </>
  );
};

export const getServerSideProps = async () => {
  const year = new Date().getFullYear();
  const month = ("0" + (new Date().getMonth() + 1)).slice(-2);
  const date = ("0" + new Date().getDate()).slice(-2);

  // Fetch data from external API
  const res = await fetch(
    `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=015f0705bbe0482589da35f787d46817&Type=json&pIndex=1&pSize=3&ATPT_OFCDC_SC_CODE=Q10&SD_SCHUL_CODE=8490078&MLSV_YMD=${year}${month}${date}`,
  );
  const data = await res.json();
  const mealData = await data.mealServiceDietInfo[1].row;
  const parseDataStringIntoList = (dataString) => {
    return dataString.replace(/\./gi, "").replace(/[0-9]/g, "").split("<br/>"); //removing tags
  };
  let mealList = [];
  for (let i = 0; i < 3; i++) {
    mealList.push(parseDataStringIntoList(mealData[i].DDISH_NM));
  }
  // Pass data to the page via props
  return { props: { mealList } };
};

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      The current theme is: {theme}
      <button onClick={() => setTheme("system")}>시스템</button>
      <button onClick={() => setTheme("라이트")}>라이트</button>
      <button onClick={() => setTheme("다크")}>다크</button>
    </div>
  );
};

export default Home;
