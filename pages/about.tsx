import Head from "next/head";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import styles from "../styles/About.module.scss";

const About = () => {
  return (
    <>
      <Head>
        <title>더보기</title>
        <meta name="description" content="더보기" />
      </Head>
      <HeaderComponent title="더보기" />
      <FooterComponent currentPage={4} />
    </>
  );
};

export default About;
