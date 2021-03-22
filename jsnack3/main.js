$(document).ready(function() {

const myFunction = (array, a, b) => {
  let arrayFiltered = [];

  for (let i = 0; i < array.length; i++) {
    if (i >= a && i <=b) {
      arrayFiltered.push(array[i]);
    }
  }
  return arrayFiltered
};

const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newFunction = (array, a, b) => {
  const arrayFiltered = array.filter ((element, index, array) => {
    return index >= a && index <= b
  });
  return arrayFiltered
};
console.log(newFunction(numeri, 3, 6));





})
