import { useSelector } from "react-redux";

const Mydashboard=()=>{
    const booklist=useSelector(state=>state.Booklist);
    const alluser=useSelector(state=>state.Userlist);
    const allapi=useSelector(state=>state.Apilist);

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-4 mt-4 mb-4">
                    <div className="p-4 shadow-lg rounded text-center">
                        <i className="fa fa-book fa-4x text-primary mb-3"></i>
                        <h4>{booklist.length} - Book in redux store</h4>
                    </div>
                </div>

                <div className="col-lg-4 mt-4 mb-4">
                    <div className="p-4 shadow-lg rounded text-center">
                        <i className="fa fa-users fa-4x text-danger mb-3"></i>
                        <h4>{alluser.length} - Users in redux store</h4>
                    </div>
                </div>

                <div className="col-lg-4 mt-4 mb-4">
                    <div className="p-4 shadow-lg rounded text-center">
                        <i className="fa fa-globe fa-4x text-success mb-3"></i>
                        <div className="col-lg-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Sl No</th>
                                <th>Fullname</th>
                                <th>Mobile No</th>
                                <th>City name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                alluser.map((user, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>sl No{index}</td>
                                            <td>{user.name}</td>  
                                            <td>{user.mobile}</td>  
                                            <td>{user.city}</td>     
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 mt-4 mb-4">
                    <div className="p-4 shadow-lg rounded text-center">
                        <i className="fa fa-book fa-4x text-primary mb-3"></i>
                        <h4>{booklist.length} - Book in redux store</h4>
                    </div>
                </div>

                <div className="col-lg-4 mt-4 mb-4">
                    <div className="p-4 shadow-lg rounded text-center">
                        <i className="fa fa-users fa-4x text-danger mb-3"></i>
                        <h4>{alluser.length} - Users in redux store</h4>
                    </div>
                </div>

                <div className="col-lg-4 mt-4 mb-4">
                    <div className="p-4 shadow-lg rounded text-center">
                        <i className="fa fa-globe fa-4x text-success mb-3"></i>
                        <h4>{allapi.length} - Api records in redux store</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Mydashboard;