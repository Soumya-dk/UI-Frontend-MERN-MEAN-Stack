import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

const Myuser=()=>{
    let [fullname,pickName]=useState("");
    let [mobileno,pickMobile]=useState("");
    let [cityname,pickCity]=useState("");
    
    const alluser=useSelector(state=>state.Userlist); // fetch all user from store
    const dispatch=useDispatch(); // object creation of useDispacth()
    
    const save=()=>{
        let userdata={name:fullname, mobile:mobileno, city:cityname};
        let userinfo={details:userdata, type:"adduser"};
        dispatch(userinfo); //dispatch the details to store
        swal(fullname, "Sent to store...", "success");
        pickName("");
        pickMobile("");
        pickCity("");
    }

    const deluser=(index, name)=>{
        let userinfo={userindex:index, type:"removeuser"};
        dispatch(userinfo); //dispatch the details to store
        swal(name, "Deleted from store...", "warning");
    }
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1 className="text-primary">Manage Users : {alluser.length}</h1>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-4">
                    <div className="shadow-lg p-4">
                        <h3>Enter User Details</h3>
                        <div className="mb-4">
                            <label>Full name</label>
                            <input type="text" className="form-control"
                            onChange={obj=>pickName(obj.target.value)}
                            value={fullname}/>
                        </div>
                        <div className="mb-4">
                            <label>Mobile No</label>
                            <input type="number" className="form-control"
                            onChange={obj=>pickMobile(obj.target.value)}
                            value={mobileno}/>
                        </div>
                        <div className="mb-4">
                            <label>City Name</label>
                            <select className="form-select"
                            onChange={obj=>pickCity(obj.target.value)}
                            value={cityname}>
                                <option value="">Choose</option>
                                <option>Bangalore</option>  
                                <option>Chennai</option>  
                                <option>Mumbai</option>  
                                <option>Pune</option>    
                            </select>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-danger" onClick={save}>Save User</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Sl No</th>
                                <th>Fullname</th>
                                <th>Mobile No</th>
                                <th>City name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                alluser.map((user, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{user.name}</td>  
                                            <td>{user.mobile}</td>  
                                            <td>{user.city}</td> 
                                            <td>
                                                <button className="btn btn-danger btn-sm"
                                                onClick={deluser.bind(this, index, user.name)}>Delete</button>
                                            </td>       
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Myuser;