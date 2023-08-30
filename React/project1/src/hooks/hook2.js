import { useState } from "react";
import Myhook6 from "./hook6";

const Myhook2=()=>{
    let [booklist,updateBook]=useState(['HTML','CSS','JavaScript']);
    let [newbook,pickbook]=useState("");

    const savebook=()=>{
        // let newbook=document.getElementById("mybook").value; //pick value
        updateBook(booklist => [...booklist,newbook]);
        // document.getElementById("mybook").value=""; //clear text box
        pickbook("");
    }
    return(
        <section>
            <h1>useState(), [...] spread operator and state management</h1>
            <i>Your book name is : {newbook} </i>
            <p>
                Enter new book name : <input type="text" id="mybook" onChange={obj=>pickbook(obj.target.value)} value={newbook}/>
                <button onClick={savebook}>Save</button>
            </p>
            {
                booklist.map((bookname,index)=>{
                    return(
                        <p className="three" key={index}> {bookname} </p>
                    )
                })
            }
            <Myhook6 itemname="Milk" price="25" qty="1" star="5" color="green"/>
            <Myhook6 itemname="Apple" price="300" qty="4" star="3" color="orange"/>
        </section>
    )
}
export default Myhook2;