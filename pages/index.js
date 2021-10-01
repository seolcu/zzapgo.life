import Head from "next/head";
import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <div>
      <Head>
        <title>홈</title>
        <meta name="description" content="홈" />
      </Head>
      <header className={styles.header}>홈</header>
      <h1 className={styles.title}>홈</h1>
      <ThemeChanger />
    </div>
  );
};

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      The current theme is: {theme}
      <button onClick={() => setTheme("system")}>시스템</button>
      <button onClick={() => setTheme("라이트")}>라이트</button>
      <button onClick={() => setTheme("다크")}>다크</button>
      <button onClick={() => setTheme("클래식")}>클래식</button>
    </div>
  );
};

export default Home;
