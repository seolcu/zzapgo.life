import styles from "./OneMeal.module.scss";

const OneMeal = ({ mealType, mealList }) => {
  const MenuList = () => {
    let JSX = [];
    for (let i = 0; i < mealList.length; i++) {
      JSX.push(<li>{mealList[i]}</li>);
    }
    return JSX;
  };
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        오늘의{" "}
        {mealType == 0
          ? "아침"
          : mealType == 1
          ? "점심"
          : mealType == 2
          ? "저녁"
          : "???"}
      </h2>
      <ul>{MenuList()}</ul>
    </div>
  );
};

export default OneMeal;
