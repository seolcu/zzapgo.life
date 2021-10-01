import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";

import HomeIcon from "../components/footerIcons/HomeIcon";
import CalendarIcon from "../components/footerIcons/CalendarIcon";
import BookmarkIcon from "../components/footerIcons/BookmarkIcon";
import TimetableIcon from "../components/footerIcons/TimetableIcon";
import MenuIcon from "../components/footerIcons/MenuIcon";

import themeList from "../styles/themeList";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Home() {
  const [currentThemeName, setCurrentThemeName] = useState("다크");

  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiper, setSwiper] = useState(null);

  return (
    <div className={styles.main} style={themeList[currentThemeName]}>
      <Head>
        <title>짭고라이프</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Swiper
        style={{ height: "100%" }}
        onSwiper={setSwiper}
        onSlideChange={(s) => setCurrentSlide(s.activeIndex)}
        initialSlide={0}
        slidesPerView={1}
        spaceBetween={300}
        centeredSlides={true}
      >
        <SwiperSlide className>
          <header className={styles.header}>홈</header>
        </SwiperSlide>
        <SwiperSlide>
          <header className={styles.header}>캘린더</header>
        </SwiperSlide>
        <SwiperSlide>
          <header className={styles.header}>북마크</header>
        </SwiperSlide>
        <SwiperSlide>
          <header className={styles.header}>시간표</header>
        </SwiperSlide>
        <SwiperSlide>
          <header className={styles.header}>더보기</header>
        </SwiperSlide>
      </Swiper>
      <footer className={styles.footer}>
        <div
          className={styles.footerIconWrapper}
          onClick={() => swiper.slideTo(0)}
        >
          <HomeIcon
            color={
              currentSlide == 0
                ? "var(--footerIconColorEnabled)"
                : "var(--footerIconColorDisabled)"
            }
          />
          <p
            className={styles.footerText}
            style={
              currentSlide == 0 ? { display: "block" } : { display: "none" }
            }
          >
            홈
          </p>
        </div>
        <div
          className={styles.footerIconWrapper}
          onClick={() => swiper.slideTo(1)}
        >
          <CalendarIcon
            color={
              currentSlide == 1
                ? "var(--footerIconColorEnabled)"
                : "var(--footerIconColorDisabled)"
            }
          />
          <p
            className={styles.footerText}
            style={
              currentSlide == 1 ? { display: "block" } : { display: "none" }
            }
          >
            캘린더
          </p>
        </div>
        <div
          className={styles.footerIconWrapper}
          onClick={() => swiper.slideTo(2)}
        >
          <BookmarkIcon
            color={
              currentSlide == 2
                ? "var(--footerIconColorEnabled)"
                : "var(--footerIconColorDisabled)"
            }
          />
          <p
            className={styles.footerText}
            style={
              currentSlide == 2 ? { display: "block" } : { display: "none" }
            }
          >
            북마크
          </p>
        </div>
        <div
          className={styles.footerIconWrapper}
          onClick={() => swiper.slideTo(3)}
        >
          <TimetableIcon
            color={
              currentSlide == 3
                ? "var(--footerIconColorEnabled)"
                : "var(--footerIconColorDisabled)"
            }
          />
          <p
            className={styles.footerText}
            style={
              currentSlide == 3 ? { display: "block" } : { display: "none" }
            }
          >
            시간표
          </p>
        </div>
        <div
          className={styles.footerIconWrapper}
          onClick={() => swiper.slideTo(4)}
        >
          <MenuIcon
            color={
              currentSlide == 4
                ? "var(--footerIconColorEnabled)"
                : "var(--footerIconColorDisabled)"
            }
          />
          <p
            className={styles.footerText}
            style={
              currentSlide == 4 ? { display: "block" } : { display: "none" }
            }
          >
            더보기
          </p>
        </div>
      </footer>
    </div>
  );
}
