import Head from "next/head";
import CardLayout from "../components/CardLayout";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import styles from "../styles/Bookmark.module.scss";
import BookIcon from "../components/icons/BookIcon";
import PenIcon from "../components/icons/PenIcon";
import MonitorIcon from "../components/icons/MonitorIcon";
import CheckSquareIcon from "../components/icons/CheckSquareIcon";
import UserCheckIcon from "../components/icons/UserCheckIcon";

const Bookmark = () => {
  const iconSize = 50;
  const iconWidth = 1.3;
  return (
    <>
      <Head>
        <title>북마크</title>
        <meta name="description" content="북마크" />
      </Head>
      <HeaderComponent title="북마크" />
      <a href="https://gwangcheol.hs.jne.kr/user/indexMain.action?siteId=gwangcheol_hs">
        <CardLayout>
          <div className={styles.wrapper}>
            <h2>
              광양제철고등학교
              <br />
              학교 홈페이지
            </h2>
            <BookIcon size={iconSize} width={iconWidth} />
          </div>
        </CardLayout>
      </a>
      <a href="https://gwangcheol.riroschool.kr/">
        <CardLayout>
          <div className={styles.wrapper}>
            <h2>
              리로스쿨
              <br />
              한빛시스템
            </h2>
            <MonitorIcon size={iconSize} width={iconWidth} />
          </div>
        </CardLayout>
      </a>
      <a href="https://cafe.naver.com/gwangcheolclub">
        <CardLayout>
          <div className={styles.wrapper}>
            <h2>
              지원단 {"&"} 봉사단
              <br />
              한빛 커뮤니티
            </h2>
            <PenIcon size={iconSize} width={iconWidth} />
          </div>
        </CardLayout>
      </a>
      <a href="http://gwang.i-zone.kr/check.php?sc=71">
        <CardLayout>
          <div className={styles.wrapper}>
            <h2>
              플라이키친
              <br />
              급식 신청
            </h2>
            <CheckSquareIcon size={iconSize} width={iconWidth} />
          </div>
        </CardLayout>
      </a>
      <a href="https://hcs.eduro.go.kr/#/main">
        <CardLayout>
          <div className={styles.wrapper}>
            <h2>
              교육부
              <br />
              자가 진단
            </h2>
            <UserCheckIcon size={iconSize} width={iconWidth} />
          </div>
        </CardLayout>
      </a>
      <FooterComponent currentPage={2} />
    </>
  );
};

export default Bookmark;
