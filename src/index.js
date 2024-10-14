import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter } from 'react-router-dom';
////
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Route from './Routes/Route.js';
import Contacts from './Routes/Contacts.js';
import Faq from './Routes/Faq.js';
import Indes from './Routes/Indes.js';
import Errorpage from './Routes/Errorpage.js';
import Userinfo from './Routes/Userinfo.js';
import Userlayout from './Routes/Userlayout.js';
import Useredit from './Routes/Useredit.js';
const routes = createBrowserRouter([
  {
    path: '/',
    element:<Route/>,
    errorElement: <Errorpage/>,
    children: [
      {
        index : true,
        element:  <Indes/>
      },
      {
             path: 'contact',
             element: <Contacts />
      },{
            path: 'faq',
            element: <Faq />
      }
    ]
  },{
    path: '/user',
    element: <Userlayout/>,
    children: [
      {
        path : 'info',
        element: <Userinfo/>
      },
      {
        path: 'userid/edit',
        element: <Useredit/>
      }
    ]
  }
  // {
  //   path: 'contact',
  //   element: <Contacts />

  // },
  // {
  //   path: 'faq',
  //   element: <Faq />
  // }
]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );
////////////////////////
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={routes}/>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
