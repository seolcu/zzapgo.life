import HomeIcon from "../icons/HomeIcon";
import CalendarIcon from "../icons/CalendarIcon";
import BookMarkIcon from "../icons/BookMarkIcon";
import TimetableIcon from "../icons/TimetableIcon";
import MenuIcon from "../icons/MenuIcon";

const Footer = (currentPage, setCurrentPage) => {
  const iconSize = "35";
  return (
    <footer>
      <div className="iconWrapper" onClick={() => setCurrentPage("Home")}>
        <HomeIcon
          color={
            currentPage === "Home"
              ? "var(--selectedIconColor)"
              : "var(--notSelectedIconColor)"
          }
          size={iconSize}
        />
      </div>

      <div className="iconWrapper" onClick={() => setCurrentPage("Calendar")}>
        <CalendarIcon
          color={
            currentPage === "Calendar"
              ? "var(--selectedIconColor)"
              : "var(--notSelectedIconColor)"
          }
          size={iconSize}
        />
      </div>
      <div className="iconWrapper" onClick={() => setCurrentPage("Shortcut")}>
        <BookMarkIcon
          color={
            currentPage === "Shortcut"
              ? "var(--selectedIconColor)"
              : "var(--notSelectedIconColor)"
          }
          size={iconSize}
        />
      </div>
      <div className="iconWrapper" onClick={() => setCurrentPage("Timetable")}>
        <TimetableIcon
          color={
            currentPage === "Timetable"
              ? "var(--selectedIconColor)"
              : "var(--notSelectedIconColor)"
          }
          size={iconSize}
        />
      </div>
      <div className="iconWrapper" onClick={() => setCurrentPage("About")}>
        <MenuIcon
          color={
            currentPage === "About"
              ? "var(--selectedIconColor)"
              : "var(--notSelectedIconColor)"
          }
          size={iconSize}
        />
      </div>
    </footer>
  );
};

export default Footer;
