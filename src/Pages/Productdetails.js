import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Productdetails(){
    const [product, setproduct] = useState([]);
    let {productID} = useParams();
    useEffect(()=>{

        fetch(`http://localhost:3300/products/${productID}`)
        .then((res)=>res.json())
        .then((data)=>setproduct(data))

    }, []);
    return(
        <>
        <h1>Product Details # {productID}</h1>
        {product && <> <h1> { product.title} </h1> <h2>{product.price}</h2> </>}
        </>
    );
}
export default Productdetails;