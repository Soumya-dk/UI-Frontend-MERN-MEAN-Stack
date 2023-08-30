import { useState, useEffect } from "react";
import swal from "sweetalert";
import {Link} from "react-router-dom";

const Api2=()=>{
    let[allcustomer,updateCustomer]=useState([]);
    const getCustomer=()=>{
        fetch("http://localhost:1234/customerlist")
        .then(response=>response.json())
        .then(customerArray=>{
            updateCustomer(customerArray);
        }) 
    }

    useEffect(()=>{
        getCustomer();
    }, [1]); //true or 1

    let [fullname,pickname]=useState("");
    let [mobileno,pickmobile]=useState("");
    let [cityname,pickcity]=useState("");

    const save=()=>{
        let newcustomer={"name": fullname,"mobile": mobileno,"city": cityname};
        let url="http://localhost:1234/customerlist";
        let postdata={
            headers:{'Content-Type':'application/json'},
            method:"POST",
            body:JSON.stringify(newcustomer)
        }
        fetch(url, postdata)
        .then(response=>response.json())
        .then(customerInfo=>{
            swal(fullname, "Save Successfully...", "success");
            getCustomer();
            pickname("");
            pickmobile("");
            pickcity("");
        })
    }

    const delcustomer=(customerid, custname)=>{
        let url="http://localhost:1234/customerlist/" + customerid;
        fetch(url, {"method":"DELETE"})
        .then(response=>response.json())
        .then(customerInfo=>{
            swal(custname, "Deleted Successfully...", "success");
            getCustomer(); // to reload the list
        })
    }

    return(
        <section>
            <h1>Available Customer : {allcustomer.length}</h1>
            <table align="left" cellpadding="10">
                <tbody>
                    <tr>
                        <td colspan="2">Enter customer details</td>
                    </tr>
                    <tr>
                        <td>Customer Name</td>
                        <td><input type="text" onChange={obj=>pickname(obj.target.value)} value={fullname}/></td>
                    </tr>
                    <tr>
                        <td>Mobile No</td>
                        <td><input type="number" onChange={obj=>pickmobile(obj.target.value)} value={mobileno}/></td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td><input type="text" onChange={obj=>pickcity(obj.target.value)} value={cityname}/></td>
                    </tr>
                    <tr>
                        <td colspan="2" align="center">
                            <button onClick={save}>Save Customer</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table align="right" cellpadding="10" width="600">
                <thead>
                    <tr>
                        <th>Customer Id</th>
                        <th>Customer Name</th>
                        <th>Mobile</th>
                        <th>City</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allcustomer.map((customer, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{customer.id}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.mobile}</td>
                                    <td>{customer.city}</td>
                                    <td>
                                        <button onClick={delcustomer.bind(this, customer.id,customer.name)}>Delete</button>
                                    </td>
                                    <td>
                                        <Link to={`/editcust/${customer.id}`}>Edit</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}
export default Api2;