import Head from "next/head";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import styles from "../styles/Bookmark.module.scss";

const Bookmark = () => {
  return (
    <>
      <Head>
        <title>북마크</title>
        <meta name="description" content="북마크" />
      </Head>
      <HeaderComponent title="북마크" />
      <FooterComponent currentPage={2} />
    </>
  );
};

export default Bookmark;
