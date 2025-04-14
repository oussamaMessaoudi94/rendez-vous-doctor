export default function date(year, month) {
  const dates = [];
  const date = new Date(year, month - 1, 1); // Month is 0-based

  while (date.getMonth() === month - 1) {
    if (date.getDay() !== 0) {  // Skip Sundays
      dates.push(new Date(date));  // Clone the date
    }
    date.setDate(date.getDate() + 1);
  }

  return dates;
}
