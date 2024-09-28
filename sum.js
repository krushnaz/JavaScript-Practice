function sum(num){
    if(num <= 1){
        return num;
    }else{
        return num + sum(num-1);
    }
}
result = sum(100);
console.log(result);