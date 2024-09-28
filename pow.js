function pow(num,pow){
    result = num;
    for(let i=1;i< pow;i++){
         result *= num;
    }
    return result;
}

console.log(pow(3,3))