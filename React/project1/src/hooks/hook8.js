import { useState, useEffect } from "react";

const Myhook8=()=>{
    let [booklist,updatebook]=useState([]);

    const getdata=()=>{
        fetch("book.json")
        .then(xyz=> xyz.json())
        .then(arrayData=>{
            updatebook(arrayData);
        })
    }

    useEffect(()=>{
        getdata();
    });

    return(
        <section>
            <h1>useState(), fetch(), useEffect() Example</h1>
            <button onClick={getdata}>Show Books</button>
            <h2>Total Books : {booklist.length}</h2>
            {
                booklist.map((bookname, index)=>{
                    return(
                        <p key={index} className="three">{bookname}</p>
                    )
                })
            }
        </section>
    )
}
export default Myhook8;