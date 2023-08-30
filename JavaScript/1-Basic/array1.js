// why we need array
let a="Apple";
let b="Mango";
let c="Orange";
let d=500;
let e=100.50;

//  How to create array in javascript
let item=['Apple','Mango','Orange','Banana','Grapes','Milk'];
let product=new Array('Apple','Mango','Orange','Banana','Grapes');
console.log(item.length);
console.log(product.length);

/*
    arrayName[index position]=>Element
    item[0]=>Apple
    item[1]=>Mango
    item[2]=>Orange
    item[3]=>Banana
    item[4]=>Grapes
    item[5]=>Milk
 */
console.log(item[0]);//how to print 1st element of an array
console.log(item[5]);//static
console.log(item[item.length-1]);//how to print last element of an array //dynamic