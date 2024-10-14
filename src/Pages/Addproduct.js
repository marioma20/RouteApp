import { useEffect, useState } from "react";
import { json, Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import './addproducr.css';
function AddProduct(){
    const [title, settitle] = useState('');
    const [price, setprice] = useState('');
    let navigate = useNavigate()
   const formsubmit = (e)=>{
    e.preventDefault();
    // console.log(title);
    // console.log(price)
    fetch(`http://localhost:3300/products`,{
        method: "POST",
        body: JSON.stringify({
            title,
            price
        })
    }).then((res)=>res.json()).then((data)=>console.log(data),navigate('/products'))
   }


    return(
    <>
    <h2>Add Product</h2>
    
<form onSubmit={formsubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control" id="ProductPrice" aria-describedby="emailHelp" onChange={(e)=>{
        settitle(e.target.value)
    }}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Price</label>
    <input type="number" className="form-control" id="ProductPrice" aria-describedby="emailHelp" onChange={(e)=>{
        setprice(e.target.value);
    }}/>
  </div>
 

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    </>
    );
}
export default AddProduct;