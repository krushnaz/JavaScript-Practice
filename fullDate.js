var date = new Date();
dd = date.getDate();
mm = date.getMonth();
yyyy = date.getFullYear();
console.log("day is :"+dd)
if(dd < 10){
    dd = '0'+dd;
}
if(mm < 10){
    mm = '0'+mm;
}
console.log(dd+"/"+mm+"/"+yyyy);
console.log(mm+"/"+dd+"/"+yyyy);
console.log(dd+"-"+mm+"-"+yyyy);
console.log(mm+"/"+dd+"/"+yyyy);
