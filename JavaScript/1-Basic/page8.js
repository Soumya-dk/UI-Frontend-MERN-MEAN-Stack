let input="Bangalore";
// isNaN()- it return true for string,return false for number

if(isNaN(input)){
    console.log(input, "is string value");
}
else{
    console.log(input, "is number value");
    if(input%2 ==0)
        console.log("The", input,"is even number");
    else
        console.log("The", input,"is odd number");
}
