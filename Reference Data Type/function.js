//Function are the resuable part of the code than can be called at executed at any poin of the code
function sum(x,y){
    let result = x + y;
    return result;
}

let output = sum(3,8);
console.log(output);

//Anonymous Functions are the function which does not havve name they are assigned to variables or passed as arguments to other function. They are useful in situation where a function is needed temporily or as a callback function 
var add = function(x,y){
    return x + y;
};

console.log(add(2,2));