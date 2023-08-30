import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";

const Editcustomer=()=>{
    let{customerid}=useParams();
    
    let [fullname,pickname]=useState("");
    let [mobileno,pickmobile]=useState(0);
    let [cityname,pickcity]=useState("");

    const getDetails=()=>{
        let url="http://localhost:1234/customerlist/" + customerid;
        fetch(url)
        .then(response=>response.json())
        .then(customerInfo=>{
            pickname(customerInfo.name);
            pickmobile(customerInfo.mobile);
            pickcity(customerInfo.city);
        })
    }

    useEffect(()=>{
        getDetails();
    }, [1]);

    const updatedata=()=>{
        let newcustomer={"name": fullname,"mobile": mobileno,"city": cityname};
        let url="http://localhost:1234/customerlist/" + customerid;
        let postdata={
            headers:{'Content-Type':'application/json'},
            method:"PATCH",
            body:JSON.stringify(newcustomer)
        }
        fetch(url, postdata)
        .then(response=>response.json())
        .then(customerInfo=>{
            swal(fullname, "Updated Successfully...", "success");
            window.location.href="#/api2";
        })
    }

    return(
        <section>
            <h1>Edit User with id: {customerid}</h1>

            <table align="left" cellpadding="15">
                <tr>
                    <td>Customer name</td>
                    <td><input type="text" value={fullname}  onChange={obj=>pickname(obj.target.value)}/></td>
                </tr>
                <tr>
                    <td>Customer mobile no</td>
                    <td><input type="text" value={mobileno}  onChange={obj=>pickmobile(obj.target.value)}/></td>
                </tr>
                <tr>
                    <td>Customer city</td>
                    <td><input type="text" value={cityname}  onChange={obj=>pickcity(obj.target.value)}/></td>
                </tr>
                <tr>
                    <td colspan="2">
                        <button onClick={updatedata}>Update User</button>
                    </td>
                </tr>
            </table>

            <table align="right" cellpadding="15">
                <tbody>
                    <tr>
                        <td>Customer name</td>
                        <td>{fullname}</td>
                    </tr>
                    <tr>
                        <td>Customer Mobile No.</td>
                        <td>{mobileno}</td>
                    </tr>
                    <tr>
                        <td>Customer City</td>
                        <td>{cityname}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}
export default Editcustomer;