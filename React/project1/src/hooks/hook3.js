import { useState } from "react";
import swal from "sweetalert";

const Myhook3=()=>{
    let[itemlist,updateItem]=useState([]);
    let[newitem,pickItem]=useState("");

    const save=()=>{
        updateItem(itemlist=>[...itemlist,newitem]);
        swal(newitem,"Added Successfully !","success");
        pickItem("");
    }
    const delitem=(index,name)=>{
        itemlist.splice(index,1); //a-b, a=a-b // delete 1 element from array
        updateItem(itemlist=>[...itemlist]); //a=a //update remaining element in state
        swal(name,"Deleted Successfully !","success");
    }
    return (
        <section>
            <h1>useState(), [...],Add,List,Delete Example with sweet alert</h1>
            <p>
                Enter Item Name : 
                <input 
                    type="text" 
                    onChange={obj=>pickItem(obj.target.value)}
                    value={newitem}
                />
                <button onClick={save}>Save Item</button>
            </p>
            <h3>Total Items : {itemlist.length} </h3>
            <table cellpadding="15"> 
                <thead>
                    <tr>
                        <th>Sl No.</th>
                        <th>Item Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        itemlist.map((itemname,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{itemname}</td>
                                    <td>
                                        <button onClick={delitem.bind(this,index,itemname)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}
export default Myhook3;