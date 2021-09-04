import BookmarkIcon from "./icons/BookmarkIcon.svelte";
import CalendarIcon from "./icons/CalendarIcon.svelte";
import HomeIcon from "./icons/HomeIcon.svelte";
import MenuIcon from "./icons/MenuIcon.svelte";
import TimetableIcon from "./icons/TimetableIcon.svelte";

const pageInfo = [
  {
    name: "home",
    url: "/",
    icon: HomeIcon,
  },
  {
    name: "diet",
    url: "/diet",
    icon: CalendarIcon,
  },
  {
    name: "shortcut",
    url: "/shortcut",
    icon: BookmarkIcon,
  },
  {
    name: "timetable",
    url: "/timetable",
    icon: TimetableIcon,
  },
  {
    name: "about",
    url: "/about",
    icon: MenuIcon,
  },
];

export default pageInfo;
