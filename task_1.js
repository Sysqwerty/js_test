// Напиши функцію, яка приймає масив чисел та повертає найбільше парне число з цього масиву. Якщо жодного парного числа немає, повертай нуль.
// const numbers = [3, 7, 12, 5, 9, 10, 15];
// const numbers = [3, 11, 55, 43, 17];

function maxOddNumber(nums) {
  // const oddNums = [];
  // for (const num of nums) {
  //   if (num % 2 === 0) {
  //     oddNums.push(num);
  //   }
  // }

  // return Math.max(...oddNums);

  let target = -Infinity;

  for (const num of nums) {
    if (!(num % 2) && num > target) {
      target = num;
    }
  }

  return target !== -Infinity ? target : 0;
}

console.log(maxOddNumber([22, 1, 2, 3, 14, 4, 5, 6, 7, 8, 9, 10, 12]));
console.log(maxOddNumber([1, 3, 5]));
