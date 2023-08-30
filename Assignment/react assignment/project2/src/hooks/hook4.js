import { useState, useEffect } from "react";

const Albumurl=()=>{
    let [albumlist, updatealbum]=useState([]);
    
    const getalbum=()=>{
        fetch("https://jsonplaceholder.typicode.com/albums")
        .then(response=>response.json())
        .then(albumArray=>{
            updatealbum(albumArray);
        })
    }

    useEffect(()=>{
        getalbum();
    })

    return(
        <section>
            <h4>Total Albums : {albumlist.length}</h4>
            <table  border="1" cellspacing="0" width="70%">
                <thead>
                    <tr align='left'>
                        <th>Id</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        albumlist.map((album, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{album.id}</td>
                                    <td>{album.title}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}
export default Albumurl;