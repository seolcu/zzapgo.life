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
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
    </div>
  );
};

export default Home;
