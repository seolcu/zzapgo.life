import Head from "next/head";
import styles from "../styles/Home.module.scss";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import DormManager from "../components/DormManager";
import MealSwiper from "../components/MealSwiper";
import { SWRConfig } from "swr";
import CardLayout from "../components/CardLayout";

const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const date = new Date().getDate();
// 급식 API
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const API = `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=015f0705bbe0482589da35f787d46817&Type=json&pIndex=1&pSize=3&ATPT_OFCDC_SC_CODE=Q10&SD_SCHUL_CODE=8490078&MLSV_YMD=${year}${(
  "0" + month
).slice(-2)}${("0" + date).slice(-2)}`;
const Home = () => {
  return (
    <>
      <Head>
        <title>홈</title>
        <meta name="description" content="홈" />
      </Head>
      <HeaderComponent title="홈" />
      <MealSwiper API={API} fetcher={fetcher} />

      <DormManager year={year} month={month} date={date} />
      <CardLayout>
        <h2 style={{ margin: "10px" }}>개발 종료 안내</h2>
        <div style={{ margin: "10px" }}>
          2021년 11월 07일 이후로,
          <br />
          짭고라이프는 더 이상 업데이트되지 않습니다.
          <br />
          코딩은 최대한 내려놓고, 학업에 더욱 집중하고자 합니다.
          <br />
          급식 서비스는 계속 사용하실 수 있습니다.
        </div>
      </CardLayout>
      <FooterComponent currentPage={0} />
    </>
  );
};

export default Home;
