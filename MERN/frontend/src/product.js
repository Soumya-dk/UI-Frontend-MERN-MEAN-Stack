import { useState,useEffect } from "react";
import {Link} from 'react-router-dom';

const Myproduct=()=>{
    let [productlist, updateProduct]=useState([]);

    const getProduct=()=>{
        fetch("http://localhost:5555/productlist")
        .then(response=>response.json())
        .then(productArray=>{
            updateProduct(productArray)
        })
    }

    useEffect(()=>{
        getProduct();
    }, [1]);

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-2">
                    <Link to="/newproduct" className="text-decoration-none"><b>+ Add Product</b></Link>
                </div>
                <div className="col-lg-10 text-center">
                    <h3>Available Products : {productlist.length} </h3>
                </div>
            </div>
            <div className="row mt-4">
                {
                    productlist.map((product, index)=>{
                        return(
                            <div className="col-lg-3 mb-4" key={index}>
                                <div className="p-4 border rounded">
                                    <h4 className="text-primary">{product.pname}</h4>
                                    <img src={product.photo} className="img-fluid rounded"/>
                                    <p className="text-info">inStock : {product.qty}</p>
                                    <p className="text-warning">Rate Rs : {product.price}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Myproduct;