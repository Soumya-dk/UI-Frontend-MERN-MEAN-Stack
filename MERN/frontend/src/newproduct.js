import { useState } from "react";
import swal from "sweetalert";

const Newproduct=()=>{

    let [productname, pickPname]=useState("");
    let [productprice, pickPprice]=useState("");
    let [productqty, pickPqty]=useState("");
    let [productphoto, pickPphoto]=useState("");

    const saveproduct=()=>{
        let newproduct={
            "pname":productname,
            "price":productprice,
            "qty":productqty,
            "photo":productphoto
        }
        let postdata={
            headers:{'Content-Type':'application/json'},
            method:"POST",
            body:JSON.stringify(newproduct)
        }
        let url="http://localhost:5555/productlist";

        fetch(url, postdata)
        .then(response=>response.json())
        .then(pinfo=>{
            swal(productname, "Save successfully", "success");
        })
    }


    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-12 text-center mb-4">
                    <h2>Enter Product Details</h2>
                </div>
                <div className="col-lg-3">
                    <label>Enter Product Name</label>
                    <input type="text" className="form-control"
                    onChange={obj=>pickPname(obj.target.value)} value={productname}/>
                </div>
                <div className="col-lg-3">
                    <label>Enter Product Price</label>
                    <input type="text" className="form-control"
                    onChange={obj=>pickPprice(obj.target.value)} value={productprice}/>
                </div>
                <div className="col-lg-3">
                    <label>Enter Product Quantity</label>
                    <input type="text" className="form-control"
                    onChange={obj=>pickPqty(obj.target.value)} value={productqty}/>
                </div>
                <div className="col-lg-3">
                    <label>Product Photo Name</label>
                    <input type="text" className="form-control"
                    onChange={obj=>pickPphoto(obj.target.value)} value={productphoto}/>
                </div>
                <div className="col-lg-12 text-center mt-5">
                    <button className="btn btn-danger" onClick={saveproduct}>Save Product</button>
                </div>
            </div>
        </div>
    )
}
export default Newproduct;