import { useState } from "react";

const Myhook1=()=>{
    let city=["Bangalore","Mumbai"];
    const [x,y]=city;

    console.log( useState() );
    let[abc,xyz]=useState(100); // [undefined,f()]
    let[user,updateUser]=useState(['Ganesh','Mahesh']);

    const one=()=>{
        xyz(abc+10);
    }
    const two=()=>{
        xyz(abc-10);
    }
    const three=()=>{
        let newUser="Test User";
        updateUser(user= [...user,newUser]);
        updateUser(user=> [...user,newUser]);
    }
    return(
        <section>
            <h1>How to use useState() hook?</h1>
            <p> {city[0]} </p>
            <p> {city[1]} </p>
            <p> {x} </p>
            <p> {y} </p>
            <h2> {abc} </h2>
            <button onClick={one}>Click Me + By 10</button>
            <button onClick={two}>Click Me - By 10</button>
            <button onClick={three}>Add User</button>
            {
                user.map((fullname,index)=>{
                    return(
                        <p key={index}> {fullname} </p>
                    )
                })
            }
        </section>
    )
}

export default Myhook1;