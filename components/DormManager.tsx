import styles from "../styles/components/DormManager.module.scss";
import CardLayout from "./CardLayout";

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

interface Props {
  year: number;
  month: number;
  date: number;
}

const DormManager = ({ year, month, date }: Props) => {
  const yearPlusMonth = `${year}/${month}`;
  const oddOrEven = date % 2 == 1 ? "odd" : "even";
  const selectedDayInfo = dormInfo[yearPlusMonth][oddOrEven];
  return (
    <CardLayout>
      <h2 className={styles.heading}>청암학사 사감</h2>
      <div className={styles.text}>
        오전: {selectedDayInfo.female[0]}, {selectedDayInfo.male[0]}
        <br />
        오후: {selectedDayInfo.female[1]}, {selectedDayInfo.male[1]}
      </div>
    </CardLayout>
  );
};

export default DormManager;
