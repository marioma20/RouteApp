import React from 'react'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Userlayout() {
    const userid = 1;
  return (
    <>
        <div>
      <ul>
        <li>
            <Link to={'/'}>login</Link>
        </li>
        <li>
            <Link to={'info'}>info</Link>
        </li>
        <li>
            <Link to={`${userid}/edit`}>edit</Link>
        </li>
      </ul>

    </div>
    <div>
        <Outlet/>
    </div>
    </>

  )
}

export default Userlayout;
