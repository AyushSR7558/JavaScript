//In JS there nothing like floating value 
//All the numbers wheather it is int or float get stored inside the numbers dataType
let number1 = 21;
let number2 = 21.2;

console.log(typeof number1, " ", typeof number2)

//if We have string and we want to create it in the number there are two ways
// first one is +string and the second one is function name as parseInt()
let string = '35'
console.log(typeof string)
number1 = +string;
console.log(typeof number1)

number2 = parseInt(string); // ParseInt() convert the string in number more Intellectually than +
console.log(typeof number2)

// if we use number + then the number get convert into string
console.log(typeof (number1 + ""));
