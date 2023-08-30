//Element-Value
let item=['Apple','Mango','Orange','Banana','Grapes','Milk'];
// index    0        1       2        3        4        5

//How to print all elements of an array
for(let i=0; i<item.length; i++){
    console.log(i,"#",item[i]);
}

console.log("-------------------------");
for(let i=item.length-1; i>=0; i=i-2){
    console.log(i,"@",item[i]);
}