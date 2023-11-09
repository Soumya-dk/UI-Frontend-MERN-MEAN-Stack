import React, { useState } from 'react'
import swal from 'sweetalert'

const Newproduct = () => {
    const [pname,setPname]=useState('')
    const [price,setPrice]=useState('')
    const [quantity,setQty]=useState('')
    const [photo,setPhoto]=useState('')
    const [disable,setDisable]=useState(false)
    const save = ()=>{
      
        let newProduct = {
            "productname":pname,
            "productprice":price,
            "productqty":quantity,
            "productphoto":photo
        }
        let postdata = {
            headers: { 'content-Type': "application/json" },
            method: "POST",
            body: JSON.stringify(newProduct)
        }
        let url = "http://localhost:5555/productlist"
        fetch(url,postdata)
        .then(response => response.json())
        .then(pinfo => {
            swal(pname, "save successfully", "success")
            setPname('')
            setPrice('')
            setQty('')
            setPhoto('')
            
        })
       
    }
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-lg-12 text-center mb-4'>
                    <h2>Enter Product Details</h2>
                </div>
                <div className='col-lg-3'>
                    <label>Enter Product Name</label>
                    <input type='text' className='form-control' onChange={obj=>setPname(obj.target.value)}/>
                </div>
                <div className='col-lg-3'>
                    <label>Enter Product Price</label>
                    <input type='text' className='form-control'onChange={obj=>setPrice(obj.target.value)} />
                </div>

                <div className='col-lg-3'>
                    <label>Enter Product Quantity</label>
                    <input type='text' className='form-control' onChange={obj=>setQty(obj.target.value)} />
                </div>

                <div className='col-lg-3'>
                    <label>Enter Product Photo</label>
                    <input type='text' className='form-control' onChange={obj=>setPhoto(obj.target.value)}/>
                </div>
                <div className='col-lg-12 text-center mt-5'>
                    <button className='btn btn-danger' onClick={save}>Save Product</button>
                </div>
            </div>
        </div>
    )
}

export default Newproduct