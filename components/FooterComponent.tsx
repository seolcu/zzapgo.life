import Link from "next/link";
import HomeIcon from "./icons/HomeIcon";
import CalendarIcon from "./icons/CalendarIcon";
import BookmarkIcon from "./icons/BookmarkIcon";
import ClockIcon from "./icons/ClockIcon";
import MenuIcon from "./icons/MenuIcon";
import styles from "../styles/components/FooterComponent.module.scss";

interface Props {
  currentPage: number;
}

const FooterComponent = ({ currentPage }: Props) => {
  interface LinkComponentProps {
    url: string;
    pageIndex: number;
    IconComponent: any;
    text: string;
  }
  const LinkComponent = ({
    url,
    pageIndex,
    IconComponent,
    text,
  }: LinkComponentProps) => {
    const size = "35";
    return (
      <Link href={url}>
        <a className={styles.a}>
          <IconComponent
            size={size}
            selected={currentPage == pageIndex ? true : false}
          />
          <div
            style={
              currentPage == pageIndex
                ? { color: "var(--primary)" }
                : { color: "var(--secondary)" }
            }
          >
            {text}
          </div>
        </a>
      </Link>
    );
  };
  return (
    <>
      <footer className={styles.wrapper}>
        <LinkComponent
          url="/"
          pageIndex={0}
          IconComponent={HomeIcon}
          text="홈"
        />
        <LinkComponent
          url="/calendar"
          pageIndex={1}
          IconComponent={CalendarIcon}
          text="캘린더"
        />
        <LinkComponent
          url="/bookmark"
          pageIndex={2}
          IconComponent={BookmarkIcon}
          text="북마크"
        />
        <LinkComponent
          url="/timetable"
          pageIndex={3}
          IconComponent={ClockIcon}
          text="시간표"
        />
        <LinkComponent
          url="/about"
          pageIndex={4}
          IconComponent={MenuIcon}
          text="더보기"
        />
      </footer>

      {/* 푸터에 가리지 않기 위한 여백 */}
      <div style={{ height: "100px" }} />
    </>
  );
};

export default FooterComponent;
