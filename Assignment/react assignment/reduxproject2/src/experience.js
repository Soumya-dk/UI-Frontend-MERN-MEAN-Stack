import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

const Myexper=()=>{
    let [company,pickComp]=useState("");
    let [projects,pickProject]=useState("");
    let [years,pickYear]=useState("");
    let [skills,pickSkills]=useState("");
    
    const allexper=useSelector(state=>state.Experlist); // fetch all user from store
    const dispatch=useDispatch(); // object creation of useDispacth()
    
    const saveexper=()=>{
        let experdata={comp:company, proj:projects, year:years, skill:skills};
        let experinfo={experience:experdata, type:"addexper"};
        dispatch(experinfo); //dispatch the details to store
        swal("Sent to store...", "success");
        pickComp("");
        pickProject("");
        pickYear("");
        pickSkills("");
    }

    return(
        <div className="container mt-5">
            <div className="row">
                <h4 className="mb-4 text-info text-center">Experience Details</h4>
                <div className="col-lg-3"></div>
                <div className="col-lg-6 shadow-lg">
                    <div className="row mb-4 mt-5">
                        <div className="col-lg-6"><h6 className="text-info">Total No Of Company Worked :</h6></div>
                        <div className="col-lg-6">
                            <input type="number" className="form-control"
                            onChange={obj=>pickComp(obj.target.value)}
                            value={company}/>
                        </div>
                    </div>
                    <div className="row mb-4 pb-2">
                        <div className="col-lg-6"><h6 className="text-info">Total Projects Worked :</h6></div>
                        <div className="col-lg-6">
                            <input type="number" className="form-control"
                            onChange={obj=>pickProject(obj.target.value)}
                            value={projects}/>
                        </div>
                    </div>
                    <div className="row mb-4 pb-2">
                        <div className="col-lg-6"><h6 className="text-info">Total Years of Experience :</h6></div>
                        <div className="col-lg-6">
                            <input type="number" className="form-control"
                            onChange={obj=>pickYear(obj.target.value)}
                            value={years}/>
                        </div>
                    </div>
                    <div className="row mb-4 pb-2">
                        <div className="col-lg-6"><h6 className="text-info">You All Tech Skills :</h6></div>
                        <div className="col-lg-6">
                            <textarea className="form-control"
                            onChange={obj=>pickSkills(obj.target.value)}
                            value={skills}></textarea>
                        </div>
                    </div>
                    <div className="text-center mb-3">
                        <button className="btn btn-outline-primary" onClick={saveexper}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Myexper;