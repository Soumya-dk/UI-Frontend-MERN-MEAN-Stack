import { useState, useEffect } from "react";
import swal from "sweetalert";

const  Mycart=()=>{
    let [allproduct,updateProduct]=useState([]);

    const getProduct=()=>{
        fetch("http://localhost:1234/cartlist")
        .then(response=>response.json())
        .then(productArray=>{
            updateProduct(productArray);
        })
    }
    
    useEffect(()=>{
        getProduct();
    },[1]);

    const changeQty= async (product, action)=>{
        if(action==="A")
        product["qty"]=product.qty+1;
        if(action==="B")
        product["qty"]=product.qty-1;

        if(product.qty<=0){
            delitem(product.id, product.name); //delete from cart api if qty is 0
        }else{
            let url="http://localhost:1234/cartlist/" + product.id
            let postData={
                headers:{'Content-Type':'application/json'},
                method:"PUT",
                body:JSON.stringify(product)
            };
            await fetch(url, postData)
            .then(response=>response.json())
            .then(serverres=>{
                swal(product.name , " Quantity updated in cart...","success");
                getProduct(); //reload the list updated value
            })
            .catch(error=>{
                swal("Error", " While updating quantity","error");
            })
           
        }
    }

    const delitem=async (id, name)=>{
        let url="http://localhost:1234/cartlist/" + id 
        let postData={method:"DELETE"};
        await fetch(url, postData)
        .then(response=>response.json())
        .then(emptyres=>{
            swal(name , " Deleted from cart !","success");
            getProduct(); 
        })
        .catch(error=>{
            swal("Error", " While deleting from cart","error");
        })
    }

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-8">
                    <h3 className="text-center">
                        item in cart : {allproduct.length}
                    </h3>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Photo</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allproduct.map((product, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>

                                            <td className="input-group">
                                                <button className="btn btn-info btn-sm" 
                                                onClick={changeQty.bind(this, product, "A")}>
                                                    <i className="fa fa-plus"></i>
                                                </button>

                                                <input type="text" value={product.qty} readOnly size="5"/>

                                                <button className="btn btn-warning btn-sm"
                                                onClick={changeQty.bind(this, product, "B")}>
                                                    <i className="fa fa-minus"></i>
                                                </button>
                                            </td>

                                            <td>{product.qty * product.price}</td>
                                            <td><img src={product.photo} height="40" width="50"/></td>
                                            <td className="text-center">
                                                <i className="fa fa-trash fa-2x text-danger" 
                                                onClick={delitem.bind(this, product.id, product.name)}></i>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Mycart;