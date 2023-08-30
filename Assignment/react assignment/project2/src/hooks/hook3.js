import { useState, useEffect } from "react";

const Commenturl=()=>{
    let [commentlist, updatecomment]=useState([]);
    
    const getcomment=()=>{
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response=>response.json())
        .then(commentArray=>{
            updatecomment(commentArray);
        })
    }

    useEffect(()=>{
        getcomment();
    })

    return(
        <section>
            <h4>Total Comments : {commentlist.length}</h4>
            <table  border="1" cellspacing="0" width="70%">
                <thead>
                    <tr align='left'>
                        <th>Name</th>
                        <th>E-mail Id</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        commentlist.map((comment, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{comment.name}</td>
                                    <td>{comment.email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}
export default Commenturl;