import Head from "next/head";
import styles from "../styles/Home.module.scss";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import DormManager from "../components/DormManager";
import MealSwiper from "../components/MealSwiper";
import { SWRConfig } from "swr";

const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const date = new Date().getDate();
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
      <DormManager year={year} month={month} date={date} />
      <FooterComponent currentPage={0} />
    </>
  );
};

// 급식 API
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const API = `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=015f0705bbe0482589da35f787d46817&Type=json&pIndex=1&pSize=3&ATPT_OFCDC_SC_CODE=Q10&SD_SCHUL_CODE=8490078&MLSV_YMD=${year}${(
  "0" + month
).slice(-2)}${("0" + date).slice(-2)}`;
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

export default Home;
