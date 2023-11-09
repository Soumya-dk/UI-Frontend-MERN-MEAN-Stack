import { useState, useEffect } from 'react';

const Order = () => {
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


    let [fullname, pickName]=useState("");
    let [mobileno, pickMobile]=useState("");
    let [emailid, pickEmail]=useState("");
    let [cityname, pickCity]=useState("");
    let [address, pickAddress]=useState("");

    const save=()=>{
        let url="http://localhost:5555/order";
        let orderdata={
            name:fullname,
            mobile:mobileno,
            email:emailid,
            city:cityname,
            address:address,
            userid:localStorage.getItem("adminid"),
            itemlist:productlist
        };
        let postdata = {
            headers:{'Content-Type':'application/json'},
            method:'POST',
            body:JSON.stringify(orderdata)
        };
        fetch(url, postdata)
        .then(response=>response.json())
        .then(serverReply=>{
            alert(serverReply.msg);
            getProduct(); // to refresh the cart list
        })
    }
    
    return (
        <div className='container mt-4'>
            <div className='row mt-4'>
                <div className='col-lg-8'>
                    <h3 className='text-center'>Customer Details</h3>
                    <div className='row mb-3'>
                        <div className='col-lg-6 mb-4'>
                            <label>Full Name</label>
                            <input type='text' className='form-control'
                            value={fullname} onChange={obj=>pickName(obj.target.value)}/>
                        </div>
                        <div className='col-lg-6 mb-4'>
                            <label>Mobile No</label>
                            <input type='number' className='form-control'
                            value={mobileno} onChange={obj=>pickMobile(obj.target.value)}/>
                        </div>
                        <div className='col-lg-6 mb-4'>
                            <label>Email Id</label>
                            <input type='email' className='form-control'
                            value={emailid} onChange={obj=>pickEmail(obj.target.value)}/>
                        </div>
                        <div className='col-lg-6 mb-4'>
                            <label>City Name</label>
                            <input type='text' className='form-control'
                            value={cityname} onChange={obj=>pickCity(obj.target.value)}/>
                        </div>
                        <div className='col-lg-12 mb-4'>
                            <label>Delivery Address</label>
                            <textarea className='form-control'
                            value={address} onChange={obj=>pickAddress(obj.target.value)}></textarea>
                        </div>
                        <div className='text-center'>
                            <button className='btn btn-primary'onClick={save}>Place My Order</button>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 mb-4'>
                    {
                        productlist.map((product, index) => {
                            return (
                                <div className='p-2 border rounded mb-2' key={index}>
                                    <h4 className='text-primary'> {product.pname} </h4>
                                    <p className='text-warning'>
                                        Rate Rs.{product.price} , Quantity - {product.qty}
                                    </p>
                                    <p className='text-danger'>Total Rs. {product.price * product.qty} </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Order;