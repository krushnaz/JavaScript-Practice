// const canfetch = typeof globalThis.fetch === 'function';
// console.log(canfetch)

// person = {}
// person.age = 22;
// console.log(person.age)
// delete person.age;
// console.log(person.a
'use strict';
let person = {}
Object.defineProperty(person,'ssn',{
    configurable : true,
    value : '11111'
});
console.log(person.ssn)
delete person.ssn;
console.log(person.ssn)
