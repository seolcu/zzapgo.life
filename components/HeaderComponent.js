import styles from "./HeaderComponent.module.scss";

const HeaderComponent = ({ title }) => {
  return (
    <header>
      <h2 className={styles.header}>{title}</h2>
    </header>
  );
};

export default HeaderComponent;
