// let person = {
//     name : "krushna",
//     email : "kz@gmail.com",

//     greet : function(){
//         return console.log("hello,",this.name);
//     }
// }

// person.greet();
// console.log(person.name);
// console.log(person.email);
// // console.log(person.greet())

let student = {
    name : "krushna",
    rollNo : 23260,
    getFullInfo : function(){
        return `name : ${this.name} and roll no : ${this.rollNo}`;
    }
}

function greet(){
    console.log("hello,",this.name);
}


student.greet = greet;
student.greet()

console.log(student.getFullInfo());