const Mydashboard=()=>{
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="text-center">Dashboard</h1>
                    <p className="text-center">Hi, {localStorage.getItem("fullname")} - How are you today?</p>
                </div>
            </div>

            <div className="row mt-4 text-center">
                <div className="col-lg-2"></div>
                <div className="col-lg-4">
                    <i className="fa fa-database fa-5x text-info"></i>
                    <h3>Item in stock - 100</h3>
                </div>
                <div className="col-lg-4">
                    <i className="fa fa-phone fa-5x text-success"></i>
                    <h3>Order received - 200</h3>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    )
}
export default Mydashboard;