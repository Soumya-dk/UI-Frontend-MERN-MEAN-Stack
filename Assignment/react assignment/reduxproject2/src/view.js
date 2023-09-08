import { useSelector } from "react-redux";

const Myview=()=>{
    const allbasic=useSelector(state=>state.Basiclist);
    const allcontact=useSelector(state=>state.Contactlist);
    const alleducation=useSelector(state=>state.Educationlist);
    const allexper=useSelector(state=>state.Experlist); 

    return(
        <div className="container mt-2">
            <h4 className="text-center text-info">About My Profile</h4>
            <div className="row">
                <div className="col-lg-6">
                    <h5 className="text-center text-info">Basic</h5>
                    <div className="p-3 shadow border border-info rounded hei">
                        {
                            allbasic.map((basic, index) => {
                                return (
                                    <div className="row" key={index}>
                                        <div className="col-lg-4">
                                            <h6 className="p-2">Name :</h6>
                                            <h6 className="p-2">Mobile :</h6>
                                            <h6 className="p-2">Email :</h6>
                                        </div>
                                        <div className="col-lg-8">
                                            <p>{basic.name}</p>
                                            <p>{basic.mobile}</p>
                                            <p>{basic.email}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="col-lg-6">
                    <h5 className="text-center text-info">Contact</h5>
                    <div className="p-3 shadow border border-info rounded hei">
                        {
                            allcontact.map((cont, index) => {
                                return (
                                    <div className="row" key={index}>
                                        <div className="col-lg-6">
                                            <h6 className="p-2">Local Address :</h6>
                                            <h6 className="p-2">Permanent Address :</h6>
                                        </div>
                                        <div className="col-lg-6">
                                            <p>{cont.local}</p>
                                            <p>{cont.perm}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-lg-6">
                    <h5 className="text-center text-info">Education</h5>
                    <div className="p-3 shadow border border-info rounded hei">
                        {
                            alleducation.map((edu, index) => {
                                return (
                                    <div className="row" key={index}>
                                        <div className="col-lg-4">
                                            <h6 className="p-2">Qualification :</h6>
                                            <h6 className="p-2">Percentage :</h6>
                                            <h6 className="p-2">Year of passing :</h6>
                                        </div>
                                        <div className="col-lg-6">
                                            <p>{edu.edu}</p>
                                            <p>{edu.percent}</p>
                                            <p>{edu.pass}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="col-lg-6">
                    <h5 className="text-center text-info">Experience</h5>
                    <div className="p-3 shadow border border-info rounded hei">
                        {
                            allexper.map((exper, index) => {
                                return (
                                    <div className="row" key={index}>
                                        <div className="col-lg-6">
                                            <h6 className="p-2">Total No Of Company Worked :</h6>
                                            <h6 className="p-2">Total Projects Worked :</h6>
                                            <h6 className="p-2">Total Years of Experience :</h6>
                                            <h6 className="p-2">You All Tech Skills :</h6>
                                        </div>
                                        <div className="col-lg-6">
                                            <p>{exper.comp}</p>
                                            <p>{exper.proj}</p>
                                            <p>{exper.year}</p>
                                            <p>{exper.skill}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default Myview;