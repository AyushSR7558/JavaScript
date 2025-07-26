//Arrays in Js are the DataStructure in Js whiich allow you to store and manipulate the collection of the data
//There are two ways of creeating the arrays
//first one is the arrray literal and second one is array constructor
//Let's try first one
const number0  = [1,2,3,4,5];
//Now try second one
const number1 = new Array(1,2,3,4,5);
//We can neglect the use of new 
//Accessing the element in the array
console.log(number0[0]);

//We can insert the element in the array at various position
//We can insert the element at the start, end or in the random

//Insertion at the end using push
number0.push(6);
console.log(number0[number0.length - 1]);
//Insertion at the start
number0.unshift(0);
console.log(number0[0]);
//Insertion at radom is done by splice method who have syntax like splice(staringIndex, deleteCount, iteam1, iteam2,....)
number0.splice(1,1,7,8,9,10)
console.log(number0)

//We can also make seperate from the array having only the element which satisfy the functionn or the given condition
//The method which do it is called as the filter
//syntax for it is const array = number.filter(_call_back_function)
const a = [1,2,3,4,5,6,7,8];
const oddNumber = a.filter(function(number){
    return number % 2;
})
console.log(oddNumber);
//We can use this filter in the array of object
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
},0);

console.log(sum);
// Output: 15