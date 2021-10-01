import Head from "next/head";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import styles from "../styles/Calendar.module.scss";

const Calendar = () => {
  return (
    <>
      <Head>
        <title>캘린더</title>
        <meta name="description" content="캘린더" />
      </Head>
      <HeaderComponent title="캘린더" />
      <FooterComponent currentPage={1} />
    </>
  );
};

export default Calendar;
