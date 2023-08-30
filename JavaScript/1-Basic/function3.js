const three=()=>{
    let obj=new Date();
    let year=obj.getFullYear();
    for(let i=year-10; i<=year; i++){
        console.log(i);
    }
}
three();

let x=new Date().toLocaleString();
console.log(x);
console.log(Date());