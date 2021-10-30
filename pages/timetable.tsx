import Head from "next/head";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import styles from "../styles/Timetable.module.scss";

const Timetable = () => {
  return (
    <>
      <Head>
        <title>시간표</title>
        <meta name="description" content="시간표" />
      </Head>
      <HeaderComponent title="시간표" />
      <FooterComponent currentPage={3} />
    </>
  );
};

export default Timetable;
