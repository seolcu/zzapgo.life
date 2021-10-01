import Link from "next/link";
import Image from "next/image";
import HomeIcon from "./icons/HomeIcon";
import CalendarIcon from "./icons/CalendarIcon";
import styles from "./FooterComponent.module.scss";

const FooterComponent = ({ currentPage }) => {
  const size = "35";
  const opacity = 0.5;
  return (
    <footer className={styles.wrapper}>
      <Link href="/">
        <a
          className={styles.a}
          style={currentPage == 0 ? { opacity: 1 } : { opacity: opacity }}
        >
          <HomeIcon size={size} />
          <div
            style={
              currentPage == 0 ? { display: "block" } : { display: "none" }
            }
          >
            홈
          </div>
        </a>
      </Link>
      <Link href="/calendar">
        <a
          className={styles.a}
          style={currentPage == 1 ? { opacity: 1 } : { opacity: opacity }}
        >
          <CalendarIcon size={size} />
          <div
            style={
              currentPage == 1 ? { display: "block" } : { display: "none" }
            }
          >
            캘린더
          </div>
        </a>
      </Link>
    </footer>
  );
};

export default FooterComponent;
