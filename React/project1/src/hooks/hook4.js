import { useState } from "react";

const Myhook4=()=>{
    let tempdata=[{itemname:"Apple",price:300,qty:5,photo:"1.jpg"}];
    let [itemlist,updateItem]=useState(tempdata);
    
    let [name,pickName]=useState("Test");
    let [iprice,pickPrice]=useState(100);
    let [iqty,pickQty]=useState(10);
    let [pphoto,pickPhoto]=useState("2.jpg");
    let [message,updateMessage]=useState("Enter Item Details...")
    const save=()=>{
        let newitem={itemname:name,price:iprice,qty:iqty,photo:pphoto};
        updateItem(itemlist=>[...itemlist,newitem]);
        updateMessage(name + " - Added Successfully !")
        pickName("");
        pickPrice("");
        pickQty("");
        pickPhoto("");
    }
    const delitem=(index,name)=>{
        itemlist.splice(index,1);
        updateItem(itemlist=>[...itemlist]);
        updateMessage(name + " - Deleted Successfully !")
    }
    return(
        <section>
            <h1>Array of object Add,Delete,List using [...] spread operator</h1>
            <p>{message}</p>
            <table cellpadding="15" align="left">
                <tr>
                    <td>Item Name</td>
                    <td><input type="text" onChange={obj=>pickName(obj.target.value)} value={name}/></td>
                </tr>
                <tr>
                    <td>Item Price</td>
                    <td><input type="number" onChange={obj=>pickPrice(obj.target.value)} value={iprice}/></td>
                </tr>
                <tr>
                    <td>Item Quantity</td>
                    <td><input type="number" onChange={obj=>pickQty(obj.target.value)} value={iqty}/></td>
                </tr>
                <tr>
                    <td>Item Photo</td>
                    <td><input type="text" onChange={obj=>pickPhoto(obj.target.value)} value={pphoto}/></td>
                </tr>
                <tr>
                    <th colspan="2">
                        <button onClick={save}>Save Item</button>
                    </th>
                </tr>
            </table>
            <table cellpadding="12" align="right">
                <thead>
                    <tr>
                        <th>Sl No</th>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Photo</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        itemlist.map((oneitem,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{oneitem.itemname}</td>
                                    <td>{oneitem.price}</td>
                                    <td>{oneitem.qty}</td>
                                    <td><img src={oneitem.photo} height="70" width="90"/></td>
                                    <td><button onClick={delitem.bind(this, index, oneitem.itemname)}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}
export default Myhook4;