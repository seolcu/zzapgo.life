import "./App.css";
import { useState, useEffect } from "react";
import themeList from "./data/themeList";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Shortcut from "./pages/Shortcut";
import Timetable from "./pages/Timetable";
import About from "./pages/About";
import Footer from "./components/Footer";

const App = () => {
  const [currentThemeName, setCurrentThemeName] = useState("클래식");
  const [currentPage, setCurrentPage] = useState("Home");

  if (localStorage.getItem("theme") !== null) {
    setCurrentThemeName(localStorage.getItem("theme"));
  }
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(currentThemeName));
  });
  return (
    <div className="App" style={themeList[currentThemeName]}>
      {() => {
        switch (currentPage) {
          case "Home":
            return <Home />;
          case "Calendar":
            return <Calendar />;
          case "Shortcut":
            return <Shortcut />;
          case "Timetable":
            return <Timetable />;
          case "About":
            return <About />;
          default:
            return <Home />;
        }
      }}
      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;
