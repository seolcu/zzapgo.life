import Head from "next/head";
import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>홈</title>
        <meta name="description" content="홈" />
      </Head>
      <h1>홈</h1>
    </div>
  );
};

export default Home;
