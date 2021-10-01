import styles from "../styles/components/DormManager.module.scss";
import FemaleIcon from "./icons/FemaleIcon";
import MaleIcon from "./icons/MaleIcon";

const DormManager = () => {
  const iconSize = 35;
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h2>지금 사감</h2>
        {true ? (
          <div onClick={() => {}}>
            <MaleIcon size={iconSize} />
          </div>
        ) : (
          <div onClick={() => {}}>
            <FemaleIcon size={iconSize} />
          </div>
        )}
      </div>

      <div>{}</div>
    </div>
  );
};

export default DormManager;
