import "./Header.css";

const Header = (props: any) => {
  return (
    <div className="Header">
      <h1>{props.title}</h1>
    </div>
  );
};

export default Header;
