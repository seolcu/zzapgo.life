export const currentYear: number = new Date().getFullYear();

export const currentMonth: number = new Date().getMonth() + 1;

export const currentMonthString: string = (
  "0" +
  (new Date().getMonth() + 1)
).slice(-2);

export const currentDate: number = new Date().getDate();

export const currentDateString: string = ("0" + new Date().getDate()).slice(-2);

export const currentHours: number = new Date().getHours();

export const currentMealType = (): number => {
  if (currentHours <= 8) {
    return 0;
  } else if (currentHours <= 13) {
    return 1;
  } else {
    return 2;
  }
};
