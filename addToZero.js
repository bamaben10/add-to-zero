// // Starting array
// let array = [28, 43, -12, 30, 4, 0, 12];

// // Write your solution below:
// let value = false;
// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array.length; j++) {
//     if (i !== j) {
//       if (array[i] + array[j] === 0) {
//         value = true;
//       }
//     }
//   }
// }

// console.log(value);

// let array = [28, 43, -12, 30, 4, 0, 12];

// // write your solution

// let value = false;
// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array.length; j++) {
//     if (i !== j) {
//       if (array[i] + array[j] === 0) {
//         value = true;
//       }
//     }
//   }
// }
// console.log(value);

let array = [1, 4, 11, 2, 37, -4];

let value = false;
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = true;
      }
    }
  }
}
console.log(value);
