let details={
    fullname:"Soumya",
    mobile:9876543212,
    city:"Bangalore",
    age:"25 years",
    gender:"Female"
};
console.log(details.fullname);
console.log(details.mobile);
console.log(details.city);
console.log(details.age);
console.log(details.gender);

console.log("Array of object");
let userlist=[
    {fullname:"Soumya",mobile:9876543212,city:"Bangalore",age:"25 years",gender:"Female"},
    {fullname:"Rahul",mobile:9876548912,city:"Mangalore",age:"30 years",gender:"Male"},
    {fullname:"Alex",mobile:9876234512,city:"Delhi",age:"29 years",gender:"Female"},
    {fullname:"John",mobile:9876543876,city:"Pune",age:"23 years",gender:"Male"}
];
console.log("------Using For Loop-----");
for(let i=0; i<userlist.length; i++){
    //console.log(userlist[i]);
    let user=userlist[i]; //complete object assign to user variable
    console.log(user.fullname, user.mobile, user.city, user.age, user.gender);
    console.log("---------------------------------------");
}

console.log("------Using map()-----");
userlist.map((userobj,index)=>{
    console.log(index, userobj.fullname, userobj.mobile, userobj.city, userobj.age, userobj.gender);
    console.log("---------------------------------------");
})

console.log("------Using forEach()-----");
userlist.forEach((userobj,index)=>{
    console.log(index, userobj.fullname, userobj.mobile, userobj.city, userobj.age, userobj.gender);
    console.log("---------------------------------------");
})