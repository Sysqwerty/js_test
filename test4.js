// Порахувати скільки заробив один юзер
// // (функція приймає 2 параметри
// // 1 параметр масив
// // 2 параметр імя робітника
// // Функція повертає скільки він заробив (salary*month) )
// // Порахувати загальну суму заробітку всіх робітників()
// // (функція приймає 1 параметр масив, і повертає загальну суму заробітку всіх робітників);
const workers = [
  {
    name: 'Alex',
    salary: 3500,
    month: 12,
  },
  {
    name: 'Dima',
    salary: 2500,
    month: 9,
  },
  {
    name: 'Oleg',
    salary: 1500,
    month: 36,
  },
];
const userTotalSalary = (arr, name) => {
  const user = arr.find(item => item?.name === name) ?? {};
  return user?.salary * user?.month;
};

console.log('Oleg total salary:', userTotalSalary(workers, 'Oleg'));

const sumWorkersSalary = arr =>
  arr.reduce((acc, { salary, month }) => (acc += salary * month), 0);
console.log('All workers total salary', sumWorkersSalary(workers));
