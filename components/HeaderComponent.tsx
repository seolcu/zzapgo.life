import styles from "./HeaderComponent.module.scss";

interface Props {
  title: string;
}

const HeaderComponent = ({ title }: Props) => {
  return (
    <header>
      <h2 className={styles.header}>{title}</h2>
    </header>
  );
};

export default HeaderComponent;
