import Head from "next/head";
import styles from "../styles/Home.module.scss";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

const Home = ({ mealType, mealList }) => {
  const MenuList = () => {
    let JSX = [];
    for (let i = 0; i < mealList.length; i++) {
      JSX.push(
        <li key={i.toString()} className={styles.li}>
          {mealList[i]}
        </li>,
      );
    }
    return JSX;
  };
  return (
    <>
      <Head>
        <title>홈</title>
        <meta name="description" content="홈" />
      </Head>
      <HeaderComponent title="홈" />
      <div className={styles.menuWrapper}>
        <h2>
          오늘의{" "}
          {mealType == 0
            ? "아침"
            : mealType == 1
            ? "점심"
            : mealType == 2
            ? "저녁"
            : "???"}
        </h2>
        <ul>{MenuList()}</ul>
      </div>
      <ThemeChanger />
      <FooterComponent currentPage="0" />
    </>
  );
};

export const getServerSideProps = async () => {
  const year = new Date().getFullYear();
  const month = ("0" + (new Date().getMonth() + 1)).slice(-2);
  const date = ("0" + new Date().getDate()).slice(-2);
  const hours = new Date().getHours();
  let mealType;
  if (hours <= 8) {
    mealType = 0;
  } else if (hours <= 14) {
    mealType = 1;
  } else {
    mealType = 2;
  }

  // Fetch data from external API
  const res = await fetch(
    `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=015f0705bbe0482589da35f787d46817&Type=json&pIndex=1&pSize=3&ATPT_OFCDC_SC_CODE=Q10&SD_SCHUL_CODE=8490078&MLSV_YMD=${year}${month}${date}`,
  );
  const data = await res.json();
  const mealData = await data.mealServiceDietInfo[1].row;
  const parseDataStringIntoList = (dataString) => {
    return dataString.replace(/\./gi, "").replace(/[0-9]/g, "").split("<br/>"); //removing tags
  };
  const mealList = parseDataStringIntoList(mealData[mealType].DDISH_NM);
  // Pass data to the page via props
  return { props: { mealType, mealList } };
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
