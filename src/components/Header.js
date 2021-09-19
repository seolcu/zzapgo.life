import PropTypes from "prop-types";

const Header = ({ title }) => {
  const headingStyle = {
    margin: "50px 0px 10px 10px",
    // 탈모아이폰 지원: 위쪽 마진 50px로 공간 만들기
    color: "var(--outerFontColor)",
  };
  return (
    <header className="Header">
      <h1 style={headingStyle}>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Header",
};

Header.propType = {
  title: PropTypes.string.isRequired,
};

export default Header;
