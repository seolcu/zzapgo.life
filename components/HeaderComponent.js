import styles from "./HeaderComponent.module.scss";

const HeaderComponent = ({ title }) => {
  return (
    <header className={styles.header}>
      <h3>{title}</h3>
    </header>
  );
};

export default HeaderComponent;
