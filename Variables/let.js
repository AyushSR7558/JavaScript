// //The variable Created by the var is blocked scopic
// let x = 10;
// if(true){
//     let y = 20;
//     console.log(x);
//     console.log(y);
// }
// console.log(x);
// console.log(y);// Refference Error
// ______________________________________________

// //Re-Assignment of the variable recreaded by var is possible but the redefination is not possible
// let a = 10;

// console.log(a); //Output: 10
// a = 20; // Possible
// console.log(a); //Output : 20

// let a = 10; // ERROR Syntax Error!

let a = 10;
{
    let a = 10;
    console.log(a);
}
