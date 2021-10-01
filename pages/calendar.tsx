import Head from "next/head";
import { useState } from "react";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import styles from "../styles/Calendar.module.scss";
import MealSwiper from "../components/MealSwiper";
import Calendar from "react-calendar";

const CalendarPage = () => {
  const [dateInfo, setDateInfo] = useState(new Date());
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const API = `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=015f0705bbe0482589da35f787d46817&Type=json&pIndex=1&pSize=3&ATPT_OFCDC_SC_CODE=Q10&SD_SCHUL_CODE=8490078&MLSV_YMD=${dateInfo.getFullYear()}${(
    "0" +
    (dateInfo.getMonth() + 1)
  ).slice(-2)}${("0" + dateInfo.getDate()).slice(-2)}`;
  return (
    <>
      <Head>
        <title>캘린더</title>
        <meta name="description" content="캘린더" />
      </Head>
      <HeaderComponent
        title={`${dateInfo.getMonth() + 1}월 ${dateInfo.getDate()}일`}
      />
      <Calendar
        onChange={setDateInfo}
        value={dateInfo}
        className={styles.calendar}
        minDetail="month"
        prev2Label={null}
        next2Label={null}
        calendarType="US"
        formatDay={(locale, date) => date.getDate().toString()}
        // 캘린더 css는 react-calendar.scss에서 하기
      />
      <MealSwiper API={API} fetcher={fetcher} />
      <FooterComponent currentPage={1} />
    </>
  );
};

export default CalendarPage;
