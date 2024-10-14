import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Content from "../Components/Content";
function Route() {
  return (
    <div className='App'>
        <Header/>
        <div style={{width: '100%', height: '500px', textAlign: 'center'}}>
         content here
         <Outlet/>
         </div>
        <Footer/>
    </div>
  )
}

export default Route;
