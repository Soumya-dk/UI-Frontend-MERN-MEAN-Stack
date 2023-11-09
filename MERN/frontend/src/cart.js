import { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

const Mycart = () => {
    let [productlist, updateProduct] = useState([]);
    const getProduct = () => {
        fetch("http://localhost:5555/cart")
            .then(response => response.json())
            .then(productArray => {
                updateProduct(productArray.reverse());
            })
    }

    useEffect(() => {
        getProduct();
    }, [1]);


    const delitem = (id, name) =>{
        let url = "http://localhost:5555/cart/"+id;
        let postdata = {method:"delete"};
        fetch(url, postdata)
        .then(response=>response.json())
        .then(serverres=>{
            alert(serverres.info);
            getProduct();// to reload the list
        })
    }

    const updateCart=(qty,id,sts)=>{
        let newqty=0;
        if(sts==="P")
            newqty=parseInt(qty)+1;
        else
            newqty=parseInt(qty)-1;

        if(newqty==0){
            delitem(id, "");
        }

        let url = "http://localhost:5555/cart";
        let data={id:id, qty:newqty};
        let postdata = {
            headers:{'Content-Type':'application/json'},
            method:"PUT",
            body:JSON.stringify(data)
        };
        fetch(url, postdata)
        .then(response=>response.json())
        .then(serverres=>{
            alert(serverres.msg);
            getProduct();// to reload the list
        })
    }
    
    return (
        <div className='container mt-4'>
            <div className='row mt-4'>
                {
                    productlist.map((product, index) => {
                        return (
                            <div className='col-lg-4 mb-4' key={index}>
                                <div className='p-4 border rounded'>
                                    <h4 className='text-primary'> {product.pname} </h4>
                                    <img src={product.photo} className='rounded' height="160" width="100%" />
                                    <p className='input-group mt-3 mb-3'>
                                        <button className='btn btn-primary btn-sm' 
                                        onClick={updateCart.bind(this, product.qty, product._id, "P")}> + 
                                        </button>
                                        <input type='text' readOnly value={product.qty}/>
                                        <button className='btn btn-warning btn-sm'
                                        onClick={updateCart.bind(this, product.qty, product._id, "M")}> - 
                                        </button>
                                    </p>
                                    <p className='text-warning'> Rate Rs.{product.price} </p>
                                    <p className='text-danger'> Total Rs.{product.price * product.qty} </p>
                                    <p className='text-end mt-3'>
                                        <i className='text-danger' 
                                            onClick={delitem.bind(this, product._id, product.pname)}>
                                            Delete 
                                        </i>
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
                <p className='col-lg-12 text-center mt-1'>
                    <Link to="/order" className="btn btn-warning btn-lg">Place Order</Link> 
                </p>
            </div>
        </div>
    )
}

export default Mycart;