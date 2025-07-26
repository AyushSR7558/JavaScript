let string1 = "Mobile"
let string2 = "Charger"
let finalSentence = `${string1} and ${string2}`
//In this way we can use Template Literal to concatinate the string in JS
//We can also use '+' operator in JS to concatinate the string in JS
finalSentence = string1 + " and " + string2;
console.log(finalSentence);


//There are many function which come with the string
//The first is length property : gave the length of the string
console.log(finalSentence.length);

//The second is .toUpperCase() and .toLowerCase() :-> This method are use to make the character to upper case and to the lower case
let name = "Ayush";
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.substring(1,4));//Remember the last index is not considered

//The thirs is split()
let a = name.split('y');
console.log(a);
