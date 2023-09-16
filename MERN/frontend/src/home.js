import { useState, useEffect } from "react";

const Myhome=()=>{
    let [alldata,updateData]=useState( {"citylist":[], "userlist":[], "booklist":[]} );

    const getData=()=>{
        fetch("http://localhost:2222/mydata")
        .then(response=>response.json())
        .then(dataArray=>{
            updateData(dataArray);
        })
    }

    useEffect(()=>{
        getData();
    }, [1]);

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 text-center mb-5">
                    <h1>Welcome to MERN</h1>
                </div>
                <div className="col-lg-4">
                    <h3>Total City : {alldata.citylist.length} </h3>
                    {
                        alldata.citylist.map((cityname, index)=>{
                            return(
                                <p key={index}>{cityname}</p>
                            )
                        })
                    }
                </div>
                <div className="col-lg-4">
                    <h3>Total User : {alldata.userlist.length} </h3>
                    {
                        alldata.userlist.map((fullname, index)=>{
                            return(
                                <p key={index}>{fullname}</p>
                            )
                        })
                    }
                </div>
                <div className="col-lg-4">
                    <h3>Total Books : {alldata.booklist.length} </h3>
                    {
                        alldata.booklist.map((bookname, index)=>{
                            return(
                                <p key={index}>{bookname}</p>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Myhome;