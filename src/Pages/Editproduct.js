
import { useEffect, useState } from "react";
import { json, Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Editproduct(){

    const [product, setproduct] = useState([]);
    const [title, settitle] = useState([]);
    const [price, setprice] = useState([]);
    let {productID} = useParams();
    let navigate = useNavigate()
    const formsubmit = (e)=>{

     e.preventDefault();
     // console.log(title);
     // console.log(price)
     fetch(`http://localhost:3300/products/${productID}`,{
         method: "PUT",
         body: JSON.stringify({
             title,
             price
         })
     }).then((res)=>res.json()).then((data)=>console.log(data),navigate('/products'))
    }

    return(

        <>
        <h1>hello edits</h1>
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
export default Editproduct;