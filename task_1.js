// // Напиши функцію, яка приймає масив чисел та повертає найбільше парне число з цього масиву. Якщо жодного парного числа немає, повертай нуль.
// // const numbers = [3, 7, 12, 5, 9, 10, 15];
// // const numbers = [3, 11, 55, 43, 17];

// function maxOddNumber(nums) {
//   // const oddNums = [];
//   // for (const num of nums) {
//   //   if (num % 2 === 0) {
//   //     oddNums.push(num);
//   //   }
//   // }

//   // return Math.max(...oddNums);

//   let target = -Infinity;

//   for (const num of nums) {
//     if (!(num % 2) && num > target) {
//       target = num;
//     }
//   }

//   return target !== -Infinity ? target : 0;
// }

// console.log(maxOddNumber([22, 1, 2, 3, 14, 4, 5, 6, 7, 8, 9, 10, 12]));
// console.log(maxOddNumber([1, 3, 5]));

// const form = document.querySelector('.feedback-form');
// const textarea = form.elements.message;
// const localStorageKey = 'goit-example-message';

// textarea.value = localStorage.getItem(localStorageKey) ?? '';

// form.addEventListener('input', evt => {
//   localStorage.setItem(localStorageKey, evt.target.value);
// });

// form.addEventListener('submit', evt => {
//   evt.preventDefault();
//   console.log(evt.target.elements.message.value);
//   console.log('event', evt);
//   console.log('target', evt.target);
//   console.log('currTarget', evt.currentTarget);
//   localStorage.removeItem(localStorageKey);
//   form.reset();
// });

// console.log(new Date().toLocaleString('uk-UA'));
// console.dir(new Date().toISOString());

// setTimeout(() => {
//   const makeGreeting = guestName => {
//     if (guestName === '' || guestName === undefined) {
//       return 'Guest name must not be empty';
//     }

//     return `Welcome ${guestName}`;
//   };
//   console.log(makeGreeting('Mango'));
// }, 1000);

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log(data.map(u => u.name));
  })
  .catch(error => {
    console.error('От дідько!', error);
  });

// res.then(res => console.log(res));

const searchParams = new URLSearchParams({
  _limit: 5,
  _sort: 'name',
});
