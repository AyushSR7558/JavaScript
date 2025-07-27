//Object are the most used and most important concept of the js
//Definitation: JS objects are the datastructure that enable the organization and store of the data in the form of the key value pair this key value pair are also known as the properties
//Object Creation using the literal
let person0 = {
    firstName : "Ayush",
    fatherName : "Shanakar",
    lastName : "Raut",
    age : 19,
    hobbies : ["reading", "writing", "coding"],
    message : () => {
        console.log("Kaya bolti company!");
    }
};
//Object Creation using new keyword
let person1 = new Object();

console.log(typeof person1)
person1["firstName"] = "Ayush";
person1.fatherName = "Shankar";
person1.lastName = "Raut";
//Object Creation using Object.create(nameOfObject)

let person2 = Object.create(person0);
console.log(person2);

//Object Creation using Factor function
function createPerson(){
    return {
        firstName : "Ayush",
        fatherName : "Shankar",
        lastName : "Raut",
        age : 19,
        hobbies : ["sleeping", "writing", "playing"]
    }
}
let person3 = createPerson();
console.log(person3);
//Object Creation using the Construction function
//Construction function are those funciton which does not return anything. they are the function in which we initalizes and defines the properties. There name are written in the Pascal
function PersonCreation() {
    this.name = "AYUSH";
    this.fatherName = "SHANKAR",
    this.lastName = "Raut",
    this.age = 19
}