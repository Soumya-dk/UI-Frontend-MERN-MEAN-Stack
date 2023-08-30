import { useState, useEffect } from "react";

const Myhook9=()=>{
    let [bloglist, updateblog]=useState([]);
    
    const getblog=()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response=>response.json())
        .then(blogArray=>{
            updateblog(blogArray);
        })
    }

    useEffect(()=>{
        getblog();
    })

    //"https://jsonplaceholder.typicode.com/posts"
    //"https://jsonplaceholder.typicode.com/users"
    //"https://jsonplaceholder.typicode.com/comments"
    //"https://jsonplaceholder.typicode.com/albums"
    //"https://jsonplaceholder.typicode.com/todos"

    return(
        <section>
            <h1>fetch(), useState(), useEffect() to communicate from live url</h1>
            <h1>Total Blogs : {bloglist.length}</h1>
            {
                bloglist.map((blog, index)=>{
                    return(
                        <div className="four" key={index}>
                            <p>{blog.body}</p>
                        </div>
                    )
                })
            }
        </section>
    )
}
export default Myhook9;