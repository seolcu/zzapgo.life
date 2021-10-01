import { useState, useEffect } from "react";
import styles from "./DormManager.module.scss";
import FemaleIcon from "./icons/FemaleIcon";
import MaleIcon from "./icons/MaleIcon";

const DormManager = () => {
  const [gender, setGender] = useState();
  const iconSize = 30;
  useEffect(() => {
    const changedGender = localStorage.getItem("gender");
    setGender(changedGender);
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h2>지금 사감</h2>
        {gender == "female" ? (
          <div
            onClick={() => {
              setGender("male");
              localStorage.setItem("gender", "male");
            }}
          >
            <MaleIcon size={iconSize} />
          </div>
        ) : (
          <div
            onClick={() => {
              setGender("female");
              localStorage.setItem("gender", "female");
            }}
          >
            <FemaleIcon size={iconSize} />
          </div>
        )}
      </div>

      <div>{gender}</div>
    </div>
  );
};

export default DormManager;
