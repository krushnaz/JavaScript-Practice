function Person(name,email){
    this.name = name;
    this.email = email;

    this.getFullInfo = function(){
        return `name : ${name} and email : ${email}`;
    }
}

let obj = new Person("krushna","kz@gmail.com");
let obj2 = new Person("Ram","ram@google.com")
console.log(obj.getFullInfo());
// console.log(obj.name);
// console.log(obj.email);
// console.log(obj.getFullInfo);