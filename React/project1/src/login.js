import { useState } from "react";

const Login = () =>{
    let[email, pickEmail] = useState("");
    let[password, pickPassword] = useState("");
    let[msg, updateMessage] = useState("Enter Your Login Details");

    const loginCheck = () =>{
        let url = "http://localhost:1234/account?email="+ email +"&password="+password;
        if( email == "" || password == ""){
            updateMessage("Empty Email Or Password");
        }else{
            updateMessage("Please Wait Processing...");
            fetch(url)
            .then(response=>response.json())
            .then(userinfo=>{
                if( userinfo.length >0 ){
                    updateMessage("Success : Redirecting...");
                    localStorage.setItem("userid", userinfo[0].id );
                    localStorage.setItem("fullname", userinfo[0].name );
                    window.location.reload(); // after login success reload the current page
                }else{
                    updateMessage("Fail : Invalid or Not Exists !");
                }
            })
        }
    }

    return(
        <section>
            <h1> Login </h1>
            <p> {msg} </p>
            <p> Enter Email Id</p>
            <input type="text" onChange={obj=>pickEmail(obj.target.value)}/>

            <p> Enter Password</p>
            <input type="text" onChange={obj=>pickPassword(obj.target.value)}/>

            <p>
                <button onClick={loginCheck}> Login </button>
            </p>
        </section>
    )
}

export default Login;