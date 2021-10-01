import styles from "../styles/components/DormManager.module.scss";
import CardLayout from "./CardLayout";
import FemaleIcon from "./icons/FemaleIcon";
import MaleIcon from "./icons/MaleIcon";
import { useCookie } from "next-cookie";
import React, { useState } from "react";

const dormInfo: any = {
  // [오전사감, 오후사감]
  "2021/10": {
    odd: {
      male: ["정진기 사감", "이만수 사감"],
      female: ["장정숙 사감", "이순덕 사감"],
    },
    even: {
      male: ["이만수 사감", "정진기 사감"],
      female: ["이순덕 사감", "장정숙 사감"],
    },
  },
  "2021/11": {
    odd: {
      male: ["이만수 사감", "정진기 사감"],
      female: ["이순덕 사감", "장정숙 사감"],
    },
    even: {
      male: ["정진기 사감", "이만수 사감"],
      female: ["장정숙 사감", "이순덕 사감"],
    },
  },
};

const DormManager = (props: any) => {
  const year = props.year;
  const month = props.month;
  const date = props.date;
  const yearPlusMonth = `${year}/${month}`;
  const oddOrEven = date % 2 == 1 ? "odd" : "even";
  const selectedDayInfo = dormInfo[yearPlusMonth][oddOrEven];
  const cookie = useCookie(props.cookie);
  const [gender, setGender] = useState<string>(cookie.get("gender") || "male");
  const iconSize = 30;
  return (
    <CardLayout>
      <div>
        <div className={styles.heading}>
          <h2>청암학사 사감</h2>
          {gender == "male" ? (
            <div
              onClick={() => {
                setGender("female");
                cookie.set("gender", "female");
              }}
            >
              <MaleIcon size={iconSize} />
            </div>
          ) : (
            <div
              onClick={() => {
                setGender("male");
                cookie.set("gender", "male");
              }}
            >
              <FemaleIcon size={iconSize} />
            </div>
          )}
        </div>
        <div className={styles.text}>
          오전 {selectedDayInfo[gender][0]}
          <br />
          오후 {selectedDayInfo[gender][1]}
        </div>
      </div>
    </CardLayout>
  );
};

export default DormManager;
