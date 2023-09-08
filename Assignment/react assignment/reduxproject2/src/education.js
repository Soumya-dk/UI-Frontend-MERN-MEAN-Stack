import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

const Myeducation=()=>{
    let [education,pickEdu]=useState("");
    let [percentage,pickPercent]=useState("");
    let [passing,pickPass]=useState("");
    
    const alleducation=useSelector(state=>state.Educationlist); // fetch all user from store
    const dispatch=useDispatch(); // object creation of useDispacth()
    
    const saveedu=()=>{
        let edudata={edu:education, percent:percentage, pass:passing};
        let eduinfo={educations:edudata, type:"addedu"};
        dispatch(eduinfo); //dispatch the details to store
        swal("Sent to store...", "success");
        pickEdu("");
        pickPercent("");
        pickPass("");
    }

    return(
        <div className="container mt-5">
            <div className="row">
                <h4 className="mb-4 text-info text-center">Education Details</h4>
                <div className="col-lg-3"></div>
                <div className="col-lg-6 shadow-lg">
                    <div className="mb-4 mt-4">
                        <label>Highest Qualification :</label>
                        <input type="text" className="form-control"
                        onChange={obj=>pickEdu(obj.target.value)}
                        value={education}/>
                    </div>
                    <div className="mb-4">
                        <label>Percentage </label>
                        <input type="number" className="form-control"
                        onChange={obj=>pickPercent(obj.target.value)}
                        value={percentage}/>
                    </div>
                    <div className="mb-4">
                        <label>Year of passing :</label>
                        <input type="number" className="form-control"
                        onChange={obj=>pickPass(obj.target.value)}
                        value={passing}/>
                    </div>
                    <div className="text-center mb-4">
                        <button className="btn border-info text-info" onClick={saveedu}>Save</button>
                    </div>
                </div>
            </div>
        </div>
   )
}
export default Myeducation;