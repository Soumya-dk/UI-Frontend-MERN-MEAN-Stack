let item=['Apple','Mango','Orange','Banana','Grapes','Milk'];
console.log("----Using For Loop-----");
for(let i=0; i<item.length; i++){
    console.log("The for say:",item[i]);
}

console.log("----Using While Loop-----");
let i=0;
while(i<item.length){
    console.log("The while say:",item[i]);
    i++;
}

console.log("----Using map() listing function-----");
/*
    arrayName.map(element => console.log(element));
*/
item.map(itemname => console.log("map say:",itemname));

/*
    arrayName.map((element,index)=>{
        statement.....
    })
*/
item.map((itemname,index)=>{
    console.log(index,"==========",itemname);
})

console.log("-------Using forEach()-------")
item.forEach((itemname,index)=>{
    console.log(index,"==========",itemname);
})

console.log("-------forEach() without index-------")
item.forEach(itemname => console.log("forEach say:",itemname));
