// Створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого.
const people1 = [
  {
    name: 'Alex',
    know: ['Eva', 'Jhon'],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Alex'],
  },
  {
    name: 'Eva',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: ['Alex'],
  },
]; //Not found
const people2 = [
  {
    name: 'Alex',
    know: ['Eva', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: [],
  },
  {
    name: 'Eva',
    know: [],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Alex'],
  },
]; // Not found
const people3 = [
  {
    name: 'Alex',
    know: ['Eva', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: [],
  },
  {
    name: 'Eva',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Alex'],
  },
]; // Jhon
const people4 = [
  {
    name: 'Alex',
    know: ['Eva', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: [],
  },
  {
    name: 'Eva',
    know: ['Alex'],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Alex'],
  },
]; // Not found

const findNarcissus = users => {
  const nobodyKnows = users.filter(user => !user.know.length);
  if (nobodyKnows.length !== 1) return 'Not found';
  const { name: narcissusName } = nobodyKnows[0];
  const isNarcissus = users.every(
    ({ name, know }) => name === narcissusName || know.includes(narcissusName)
  );

  return isNarcissus ? narcissusName : 'Not found';
};

const res1 = findNarcissus(people1);
console.log('res1:', res1);
const res2 = findNarcissus(people2);
console.log('res2:', res2);
const res3 = findNarcissus(people3);
console.log('res3:', res3);
const res4 = findNarcissus(people4);
console.log('res4:', res4);
