let laptop = {
    name : "HP",
    model :'15s',
    price : 55000,
    feture :{ 
    ram : "8 GB",
    memory_type : "SSD",
    memory_size : "512 GB"
    }

}
for(let key in laptop){
    console.log(key,laptop[key])
}
for(let key1 in laptop.feture){
   console.log(laptop.feture[key1])
}