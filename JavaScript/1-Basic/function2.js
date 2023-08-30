const one=()=>{
    for(let i=1; i<=10; i++){
        console.log(i);
    }
    console.log("----end-----");
}
const two=(start=0,end=0)=>{
    for(let i=start; i<=end; i++){
        console.log(i);
    }
    console.log("----end-----");
}
two(10,20);
one();
