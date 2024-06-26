import moment from "moment";

export function wait(time = 3000) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export const firstLetterUppercase = (item) => {
  return item.slice(0, 1).toUpperCase() + item.slice(1);
};

export function calculateRates(rate) {
  const percentage = (rate / 10) * 100;
  return percentage.toFixed(2);
}

export function dateFormat(date) {
  return moment(date).format("Do MMM YY");
}
