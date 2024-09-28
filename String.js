// function ucString(x){
//     return x;
// }

// console.log(ucString("krushna") === 'krushna')

// function checkSpam(x){
//     if(x == "krushna"){
//         return true;
//     }else if(x == "Zarekar"){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(checkSpam("krushna"))
// console.log(checkSpam("zarekar"))    

// function truncate(str, maxlength) {
//    return (str.length > maxlength) ? str.slice(0,maxlength-1)+'...' :str;
// }
// console.log(truncate("What I'd like to tell on this topic is:", 20))
// console.log(truncate("Hi everyone!", 20))

// function extractCurrencyValue(amount){
//     if(amount[0] == '$'){
//         return amount.slice(1);
//     }else{
//         return amount;
//     }
// }

// console.log(extractCurrencyValue('$120'));


// function camelize(inputStr){
// words = inputStr.split('-')
// console.log(words);
// for(let i=0;i<words.length;i++){
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
// }
// return words.join('')
// }
// console.log(camelize("my-first-string"))