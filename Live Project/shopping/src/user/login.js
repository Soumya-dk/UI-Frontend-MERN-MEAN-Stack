import { useState } from "react";
import swal from "sweetalert";

const Mylogin=()=>{
    let [username, pickName]=useState("");
    let [password, pickPassword]=useState("");

    const Login=()=>{
        let url="http://localhost:1234/account?email="+username+"&password="+password;
        fetch(url)
        .then(response=>response.json())
        .then(userInfo=>{
            if(userInfo.length==0){
                swal("Error","Invalid or not exists", "warning");
            }else{
                localStorage.setItem("sellerid", userInfo[0].id);
                localStorage.setItem("fullname", userInfo[0].seller);
                window.location.href="http://localhost:3000/#/";
                window.location.reload(); // reload the page after login is success
            }
        })
    }

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <div className="border p-4 rounded">
                        <h3 className="text-center">Seller Login</h3>
                        <div className="mb-4">
                            <label>Email Id</label>
                            <input type="email" className="form-control"
                            onChange={obj=>pickName(obj.target.value)}/>
                        </div>
                        <div className="mb-4">
                            <label>Password</label>
                            <input type="password" className="form-control"
                            onChange={obj=>pickPassword(obj.target.value)}/>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-danger" onClick={Login}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Mylogin;