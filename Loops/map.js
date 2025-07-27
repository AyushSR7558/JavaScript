//map help to iterate through each and every element in the array and do some transformation on that element and return the transformation array without changing the original array
const numbers = [1,2,3,4,5,6];

const doubleledNumbers = numbers.map((num) => {return num * 2})
console.log(doubleledNumbers);