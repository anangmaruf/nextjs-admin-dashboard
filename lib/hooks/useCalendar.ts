const allMonths = [
  { title: 'January', value: 'January' },
  { title: 'February', value: 'February' },
  { title: 'March', value: 'March' },
  { title: 'April', value: 'April' },
  { title: 'May', value: 'May' },
  { title: 'June', value: 'June' },
  { title: 'July', value: 'July' },
  { title: 'August', value: 'August' },
  { title: 'September', value: 'September' },
  { title: 'October', value: 'October' },
  { title: 'December', value: 'December' },
];
let years: Array<number> = getYears();


function getYears() {
  let yearNow = new Date().getFullYear();
  let years = [];
  for (let index = 1970; index < yearNow - 10; index++) {
    years.push(index + 1);
  }
  return years;
}

export { allMonths, years };
