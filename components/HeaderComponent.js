import styles from "./HeaderComponent.module.scss";

const HeaderComponent = ({ title }) => {
  return <header className={styles.header}>{title}</header>;
};

export default HeaderComponent;
