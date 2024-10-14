
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function Products(){
    const [product, setproduct] = useState([]);

    useEffect(()=>{

       getallproduct();

    }, [])

     const getallproduct = ()=>{
        fetch("http://localhost:3300/products")
        .then((res)=>res.json())
        .then((data)=>setproduct(data));
     }

    const deleteproduct = (product)=>{
        Swal.fire({
                title: `you are you sure to delete ${product.title}`,
                showCancelButton:true,
            }).then((data)=>{
                if(data.isConfirmed){
                   fetch(`http://localhost:3300/products/${product.id}`,{
                    method: "DELETE"
                   }).then((res)=>res.json())
                  .then((data)=>{getallproduct()})
                }
            })

    }
    return(
    <>
    <h1>products page</h1>

    <Link className="btn btn-success " to={"/products/add"}>
    Add New Product
    </Link>
    <table className="table table-striped mt-5 product-table">
        <thead>
            <tr className="text-center">
                <th>id</th>
                <th>title</th>
                <th>price</th>
                <th>opration</th>
            </tr>
        </thead>
        <tbody>
            {product.map((prod)=>{
                return(
                    <>
             <tr className="text-center" key={prod.id}>
                <td>{prod.id}</td>
                <td>{prod.title}</td>
                <td>{prod.price}</td>
                <td>
                    <button className="btn btn-danger btn-sm" onClick={()=>deleteproduct(prod)}>Delet</button>
                    <Link className="btn btn-info btn-sm" to={`/products/${prod.id}`}>
                    View
                    </Link>
                    <Link className="btn btn-primary btn-sm" to={`products/${prod.id}`}>
                    Edit
                    </Link>
                </td>
            </tr>
                    </>
                );
            })};
          
        </tbody>

   </table>
    </>
    );
}

export default Products;