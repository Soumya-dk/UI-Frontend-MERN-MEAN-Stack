import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

const Mybasic=()=>{
    let [fullname,pickName]=useState("");
    let [mobileno,pickMobile]=useState("");
    let [emailid,pickEmail]=useState("");
    
    const allbasic=useSelector(state=>state.Basiclist); // fetch all user from store
    const dispatch=useDispatch(); // object creation of useDispacth()
    
    const savebasic=()=>{
        let basicdata={name:fullname, mobile:mobileno, email:emailid};
        let basicinfo={basics:basicdata, type:"addbasic"};
        dispatch(basicinfo); //dispatch the details to store
        swal("Sent to store...", "success");
        pickName("");
        pickMobile("");
        pickEmail("");
    }

    return(
        <div className="container mt-5">
            <div className="row">
                <h4 className="mb-4 text-danger text-center">Basic Details</h4>
                <div className="col-lg-3"></div>
                <div className="col-lg-6 shadow-lg">
                    <div className="row mb-4 mt-5">
                        <div className="col-lg-2"><h6 className="text-danger">Name :</h6></div>
                        <div className="col-lg-10">
                            <input type="text" className="form-control border-danger"
                            onChange={obj=>pickName(obj.target.value)}
                            value={fullname}/>
                        </div>
                    </div>
                    <div className="row mb-4 pb-2">
                        <div className="col-lg-2"><h6 className="text-danger">Mobile :</h6></div>
                        <div className="col-lg-10">
                            <input type="number" className="form-control border-danger"
                            onChange={obj=>pickMobile(obj.target.value)}
                            value={mobileno}/>
                        </div>
                    </div>
                    <div className="row mb-4 pb-2">
                        <div className="col-lg-2"><h6 className="text-danger">Email :</h6></div>
                        <div className="col-lg-10">
                            <input type="email" className="form-control border-danger"
                            onChange={obj=>pickEmail(obj.target.value)}
                            value={emailid}/>
                        </div>
                    </div>
                    <div className="text-center mb-3">
                        <button className="btn btn-outline-primary" onClick={savebasic}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Mybasic;