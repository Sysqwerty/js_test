// Створити функцію яка буде приймати 2 параметра.
// 1 Масив студентів.
// 2 Мову програмування яку потрібно знайти.
// Функція повертає масив імен користувачів які вивчають цю мову.
const students2 = [
  {
    name: `Den`,
    language: `html`,
  },
  {
    name: `Petro`,
    language: `css`,
  },
  {
    name: `Egor`,
    language: `js`,
  },
  {
    name: `Max`,
    language: `html`,
  },
  {
    name: `Olga`,
    language: `css`,
  },
  {
    name: `Kate`,
    language: `js`,
  },
  {
    name: `Ivan`,
    language: `html`,
  },
];

function findGuys(array, lang) {
  return array
    .filter(({ language }) => language === lang)
    .map(({ name }) => name);
}

console.log(findGuys(students2, 'html'));
