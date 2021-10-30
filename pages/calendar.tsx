import Head from "next/head";
import { useState } from "react";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import styles from "../styles/Calendar.module.scss";
import Calendar from "react-calendar";

const CalendarPage = () => {
  const [dateInfo, setDateInfo] = useState(new Date());
  return (
    <>
      <Head>
        <title>캘린더</title>
        <meta name="description" content="캘린더" />
      </Head>
      <HeaderComponent title="캘린더" />
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
      <FooterComponent currentPage={1} />
    </>
  );
};

export default CalendarPage;
