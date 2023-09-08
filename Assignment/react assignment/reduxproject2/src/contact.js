import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

const Mycontact=()=>{
    let [localadd,pickLocal]=useState("");
    let [permadd,pickPerm]=useState("");
    
    const allcontact=useSelector(state=>state.Contactlist); // fetch all user from store
    const dispatch=useDispatch(); // object creation of useDispacth()
    
    const savecontact=()=>{
        let contactdata={local:localadd, perm:permadd};
        let contactinfo={contacts:contactdata, type:"addcontact"};
        dispatch(contactinfo); //dispatch the details to store
        swal("Sent to store...", "success");
        pickLocal("");
        pickPerm("");
    }

    return(
        <div className="container mt-5">
            <div className="row">
                <h4 className="mb-4 text-primary text-center mt-4">Contact Details</h4>
                <div className="col-lg-3"></div>
                <div className="col-lg-6 shadow-lg">
                    <div className="row mb-3 p-4">
                        <div className="col-lg-6">
                            <textarea className="form-control-lg border-primary"
                            placeholder="Local Address"
                            onChange={obj=>pickLocal(obj.target.value)}
                            value={localadd}></textarea>
                        </div>
                        <div className="col-lg-6">
                            <textarea className="form-control-lg border-primary"
                            placeholder="Permanent Address"
                            onChange={obj=>pickPerm(obj.target.value)}
                            value={permadd}></textarea>
                        </div>
                    </div>
                    <div className="text-center mb-4">
                        <button className="btn btn-outline-primary" onClick={savecontact}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Mycontact;