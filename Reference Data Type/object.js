//Object store data in the form of the key - value pair where keys are the string and values can be any data typeincluding other objects, functions, arrays, etc.
let person = {
    name : 'Mayank',
    age : 21,
    country : "India"
};

console.log(person.name);
console.log(person.age);
console.log(person['country']);

//Adding the property
person.isSleeping = false;

//Modifying the property
person.isSleeping = true;

//Deleting the property
delete person.isSleeping;

console.log(person);

//We can also have function as the property in the object the function is know as the method
person.message = function(){
    console.log("Hi Janu kese ho!");
}

person.message();
