import Link from "next/link";
import HomeIcon from "./icons/HomeIcon";
import CalendarIcon from "./icons/CalendarIcon";
import styles from "../styles/components/FooterComponent.module.scss";

interface Props {
  currentPage: number;
}

const FooterComponent = ({ currentPage }: Props) => {
  const size = "35";
  return (
    <>
      <footer className={styles.wrapper}>
        <Link href="/">
          <a className={styles.a}>
            <HomeIcon size={size} selected={currentPage == 0 ? true : false} />
            <div
              style={
                currentPage == 0
                  ? { color: "var(--footerIconEnabled)" }
                  : { color: "var(--footerIconDisabled)" }
              }
            >
              홈
            </div>
          </a>
        </Link>
        <Link href="/calendar">
          <a className={styles.a}>
            <CalendarIcon
              size={size}
              selected={currentPage == 1 ? true : false}
            />
            <div
              style={
                currentPage == 1
                  ? { color: "var(--footerIconEnabled)" }
                  : { color: "var(--footerIconDisabled)" }
              }
            >
              캘린더
            </div>
          </a>
        </Link>
      </footer>

      {/* 푸터에 가리지 않기 위한 여백 */}
      <div style={{ height: "100px" }} />
    </>
  );
};

export default FooterComponent;
