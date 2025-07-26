// // Constant Decleared with const should be assgined if not gave error
// let a; // No Error
// var b; // No Error 
// cons c; // Error
// //______________________________
// //We cannot Reassgin the const in the code
// // We cannot change the value of const but if we are creating the object with the help of const then its value can be change
// const x = 20;
// console.log(x);
// x = 30;
// console.log(x);
//______________________________
// // if we create the object with the help of the const then we can change its properties but we cannot reassign then 
// const person = {
//     name : 'Ayush',
//     age : 21
// }

// console.log(person.name); // Output : Mayank

// //Modifying object Properties is allowed
// person.name = 'Love';
// console.log(person.name);

// person = {}
// console.log(person.name)
////___________________________
// //Same is the case with the array
// const numbers = [1,2,3,4,5];
// console.log(numbers);

// //Modifying array element is allowed
// numbers.push(4);
// console.log(numbers);

// //Attempting to reassign the variable will throw a error
// number = []; //ThrowsError: Assignment ot const

//// We can declear the variable without let var const but it si bad practice and the variable become global
// x = 10;
// console.log(x);

//// Small Example just read it
// let count = 0;

// function increment(count) {
//     count++;  // This modifies the parameter, not the outer 'count'
//     console.log("Inside:", count);
// }

// increment(count);
// console.log("Outside:", count); // Still 0

//// Some more tricky Queston
// let a= 10;
// function v(){
//     let a;
//     console.log(a);
// }
// v();
////Some more tricky Questions
// let count = 0;
// if(true) {
//     let count = 1;
//     console.log(count);
// }
// console.log(count);
////Some more tricky questions
// function outer() {
//     let a = 10;
//     return function inner(b) {
//         console.log(b , " " , a);
//     }
// }
// const fn = outer();
// fn(); // What does this print and why?
//// Some more trick question
// var a = 1;

// function outer() {
//     var a = 2;

//     function inner() {
//         console.log(a);
//     }

//     inner();
// }

// outer();

{
    var a = a + 1;
    console.log(a);
}


