for(let i=1; i<=5; i++){
    console.log(i,"outer loop....");
    for(let j=1; j<=i; j++){
        console.log(j,"inner loop...."); 
    }
    console.log("\n");
}

for(let i=1; i<=5; i++){
    //console.log(i,"outer loop....");
    let x="";
    for(let j=1; j<=i; j++){
        x=x+"*";
    }
    console.log(x);
}