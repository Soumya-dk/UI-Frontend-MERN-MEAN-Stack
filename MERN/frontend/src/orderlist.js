import { useState, useEffect } from 'react';

const Orderlist = () => {
    let [productlist, updateProduct] = useState([]);
    const getProduct = () => {
        fetch("http://localhost:5555/order")
            .then(response => response.json())
            .then(productArray => {
                updateProduct(productArray.reverse());
            })
    }
    useEffect(() => {
        getProduct();
    }, [1]);


    return (
        <div className='container mt-4'>
            <div className='row mt-4'>
                <div className='col-lg-12 text-center'>
                    <h2>Order List</h2>
                </div>
            </div>
            {
                productlist.map((order, index)=>{
                    return(
                        <div className='row mv-5' key={index}>
                            <div className='col-lg-4'>
                                <h4> {order.fullname} </h4>
                                <p> {order.mobileno} </p>
                                <p> {order.emailid} </p>
                                <p> {order.cityname} </p>
                                <p> {order.address} </p>
                            </div>
                            <div className='col-lg-8'>
                                <h4>Order Items {order.orderdata.length}</h4>
                                <table className='table table-bordered'>
                                    <tbody>
                                    {
                                        order.orderdata.map((product, index)=>{
                                            return(
                                                <tr key={index}>
                                                    <td> {product.pname} </td> 
                                                    <td> {product.price} </td> 
                                                    <td> {product.qty} </td> 
                                                    <td> <img src={product.photo} height="30" width="40"/> </td>   
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Orderlist;