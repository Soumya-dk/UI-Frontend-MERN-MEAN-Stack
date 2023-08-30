import { useState, useEffect } from "react";

const Userurl=()=>{
    let [userlist, updateuser]=useState([]);
    
    const getuser=()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(userArray=>{
            updateuser(userArray);
        })
    }

    useEffect(()=>{
        getuser();
    })
    
    return(
        <section>
            <h4>Total Users : {userlist.length}</h4>
            <table  border="1" cellspacing="0" width="80%">
                <thead>
                    <tr align='left'>
                        <th>User Name</th>
                        <th>E-mail Id</th>
                        <th>Address</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userlist.map((user, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td><b>Street : </b>{user.address.street}<br/>
                                    <b>Zipcode : </b>{user.address.zipcode}</td>
                                    <td>{user.website}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}
export default Userurl;