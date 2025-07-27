//forEach loop in the js provide the concise and build in way to literate throught the array without the need of explicit indexing
let array = [1,2,3,4,5,5,6,7];

let reducedArray = array.reduce((accumulate,currentValue) => {
    return accumulate + currentValue
}, 0)

console.log(reducedArray);
array.forEach(function (number, index) {
    console.log(`The number for the index ${index} is ${number}`);
})

console.log("for of loop implementation start from this line")
for(let val of array){
    console.log(val);
}