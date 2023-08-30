import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import swal from "sweetalert";

const Myapi=()=>{
    let [bloglist, updateBlog]=useState([]);
    const getblog=()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response=>response.json())
        .then(blogArray=>{
            updateBlog(blogArray);
        })
    }

    useEffect(()=>{
        getblog();
    }, [1]);

    const dispatch=useDispatch();
    
    const save=()=>{
        let apiinfo={mydata:bloglist, type:"saveapi"};
        dispatch(apiinfo);
        swal("100 records", "Sent successfully to redux store", "success");
    }
    
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 text-center mb-4">
                    <h1 className="text-primary">Manage API Data : {bloglist.length}</h1>
                    <button onClick={save} className="btn btn-danger m-3">Send all data to redux</button>
                </div>
                {
                    bloglist.map((blog, index)=>{
                        return(
                            <div className="col-lg-6 mb-4" key={index}>
                                <div className="p-3 shadow-lg rounded">
                                    <p>{blog.body}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Myapi;