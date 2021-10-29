import Head from "next/head";
import styles from "../styles/Home.module.scss";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import DormManager from "../components/DormManager";
import MealSwiper from "../components/MealSwiper";

const Home = () => {
  return (
    <>
      <Head>
        <title>홈</title>
        <meta name="description" content="홈" />
      </Head>
      <HeaderComponent title="홈" />
      <MealSwiper />
      <DormManager />
      <ThemeChanger />
      <FooterComponent currentPage="0" />
    </>
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
    </div>
  );
};

export default Home;
