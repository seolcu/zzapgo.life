import Head from "next/head";
import styles from "../styles/Home.module.scss";
import OneMeal from "../components/OneMeal";

const Home = ({ mealType, currentMealList }) => {
  return (
    <div>
      <Head>
        <title>홈</title>
        <meta name="description" content="홈" />
      </Head>
      <header className={styles.header}>홈</header>
      <h1 className={styles.title}>홈</h1>
      <OneMeal mealType={mealType} mealList={currentMealList} />
      <ThemeChanger />
    </div>
  );
};

export const getServerSideProps = async () => {
  const year = new Date().getFullYear();
  const month = ("0" + (new Date().getMonth() + 1)).slice(-2);
  const date = ("0" + new Date().getDate()).slice(-2);
  const hours = new Date().getHours();
  const mealType = hours <= 8 ? 0 : hours <= 14 ? 1 : hours <= 19 ? 2 : 2;

  // Fetch data from external API
  const res = await fetch(
    `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=015f0705bbe0482589da35f787d46817&Type=json&pIndex=1&pSize=3&ATPT_OFCDC_SC_CODE=Q10&SD_SCHUL_CODE=8490078&MLSV_YMD=${year}${month}${date}`,
  );
  const data = await res.json();
  const mealData = await data.mealServiceDietInfo[1].row;
  const parseDataStringIntoList = (dataString) => {
    return dataString.replace(/\./gi, "").replace(/[0-9]/g, "").split("<br/>"); //removing tags
  };
  const currentMealList = parseDataStringIntoList(mealData[mealType].DDISH_NM);
  // Pass data to the page via props
  return { props: { mealType, currentMealList } };
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
      <button onClick={() => setTheme("클래식")}>클래식</button>
    </div>
  );
};

export default Home;
