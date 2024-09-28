// let price = {
//     "pen" : 100,
//     "notebook" :200,
//     "campass" : 300
// }
// sum = 0;
// for (const key in price) {
//    values = price[key]
//    sum += values;
// }
// console.log(sum)

// let object = {
   
// }
// object.name = "krushna";
// object.mob = 1234567890
// object.gender = "male"
// console.log(object)
// object.name = "ram"
// delete object.name
// console.log(object)

// function isEmpty(obj){
//     for(key in obj){
//         return false;
//     }
//     return true;
// }

// object = {
//     // name :"krushna"
// }

// result = isEmpty(object)
// console.log(result)



// function multiplyNumeric(obj){
//     mul = 1;
//     for(key in obj){
//         if(typeof obj[key] != 'string'){
//             values = obj[key]
//             mul *= values;   
//         }else{
//             console.log("String value ignored :"+obj[key]);
//         }
//     }
//     return mul;
// }
// let menu = {
//     width: 20,
//     height: 30,
//     title: "My menu"
//   };
  
//   result = multiplyNumeric(menu);
//   console.log(result)

//copying object...
// let message = "hello!";
// let phrase = message;
// console.log(phrase === message)

// let user = {
//     name : "krushna"
// }
// let admin = user;

// admin.name  = "ram"
// console.log(user)
// console.log(admin === user)
// console.log(typeof admin)


// let user = {
//     name : "krishna",
//     age : 30
// }
// console.log(user)
// let clone = {};
// for (key in user){
//     clone[key] = user[key]
// }
// clone.name = "ram"
// console.log(clone)

// let user = {
//     name :'krushna'
// }

// let permission1 = {canView : true};
// let permission2 = {canEdit : true};

// Object.assign(user,permission1,permission2);

// console.log(user.name)
// console.log(user.canView)
// console.log(user.canEdit)


// let user = {
    
// }

// function sayHi(){
//     console.log("hello!")
// }

// user.sayHello = sayHi;
// user.sayHello()
// console.log(user)

// function makeUser(){
//     return {
//         name : "krushna",
//         ref : this
//     };
// }
// let user = makeUser();
// console.log(user.ref.name)

calculator = {
    addProp(){
        this.num1 = 10;
        this.num2 = 5;
    },
     sum(){
        return this.num1 + this.num2;
    },
    mul(){
        return this.num1 * this.num2;
    },
}
calculator.addProp();
console.log(calculator.sum())
console.log(calculator.mul())
