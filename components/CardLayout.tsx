import styles from "../styles/components/CardLayout.module.scss";

const CardLayout = ({ children }: any) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default CardLayout;
