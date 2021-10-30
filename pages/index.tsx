import Head from "next/head";
import styles from "../styles/Home.module.scss";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import DormManager from "../components/DormManager";
import MealSwiper from "../components/MealSwiper";
import { SWRConfig } from "swr";

const Home = ({ fallback }: any) => {
  return (
    <>
      <Head>
        <title>홈</title>
        <meta name="description" content="홈" />
      </Head>
      <HeaderComponent title="홈" />
      <SWRConfig value={{ fallback }}>
        <MealSwiper API={API} fetcher={null} />
      </SWRConfig>
      <DormManager />
      <ThemeChanger />
      <FooterComponent currentPage={0} />
    </>
  );
};

// 급식 API
const year = new Date().getFullYear();
const month = ("0" + (new Date().getMonth() + 1)).slice(-2);
const date = ("0" + new Date().getDate()).slice(-2);
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const API = `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=015f0705bbe0482589da35f787d46817&Type=json&pIndex=1&pSize=3&ATPT_OFCDC_SC_CODE=Q10&SD_SCHUL_CODE=8490078&MLSV_YMD=${year}${month}${date}`;
export async function getServerSideProps() {
  const mealData = await fetcher(API);
  return {
    props: {
      fallback: {
        [API]: mealData,
      },
    },
  };
}

// 테마
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
