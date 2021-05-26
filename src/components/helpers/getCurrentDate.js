const arrayOfWeekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const getCurrentDate = () => {
  let newDate = new Date();
  let weekday = newDate.getDay();
  let weekdayName = arrayOfWeekdays[weekday];
  let date = newDate.getDate();
  let month = newDate.getMonth();
  let monthName = months[month];
  let year = newDate.getFullYear();

  return `${weekdayName} ${date} ${monthName} ${year}`;
};
