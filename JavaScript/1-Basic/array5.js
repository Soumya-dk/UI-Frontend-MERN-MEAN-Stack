let userlist=[
    {city:"Bangalore", alluser:['soumya','rahul']},
    {city:"Chennai", alluser:['Naresh','Ganesh']},
    {city:"Pune", alluser:['Mohit']},
    {city:"Mumbai", alluser:['Akashy']},
    {city:"Delhi", alluser:['Rohini','Vasrhini']},
]
userlist.map((info,index)=>{
    console.log(info.city);

    for(let i=0; i<info.alluser.length; i++){
        console.log("    ",info.alluser[i]);
    }
    console.log("-----------------------");
})