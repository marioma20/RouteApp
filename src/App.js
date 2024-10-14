// import logo from './logo.svg';
// import './App.css';
import Navbar from "./Component/Navbar";
import SidBar from "./Component/SidBar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import AddProduct from "./Pages/Addproduct";
import Productdetails from "./Pages/Productdetails";
import Editproduct from "./Pages/Editproduct";
import { Routes, Route } from "react-router-dom";
// /////////////////


function App() {
  return (
    <div className="App">
       {/* <h1 className='container text-center'>hello app</h1> */}
          {/* <Navbar/> */}
        {/* <div className="row"> */}
          {/* <div className="col-2 sidbar text-capitalize "> */}
            {/* test-1 */}
            {/* <SidBar/> */}
          {/* </div> */}
          {/* <div className="col-10 text-capitalize"> */}
            {/* test-2 */}
            {/* Home Page */}
            {/* <Routes>
              <Route
              path="/"
              element = {<Home/>}
              />
              <Route 
              path="products"
              element={<Products/>}
              />
              <Route
              path="products/add"
              element={<AddProduct/>}
              />
              <Route
              path="products/:productID"
              element={<Productdetails/>}
              />
              <Route
              path="products/:productTitle"
              element={<Editproduct/>}/>
              
            </Routes> */}
            
          {/* </div> */}
        {/* </div> */}
        {/* //////////////////////// */}
   
    </div>
  );
}

export default App;
