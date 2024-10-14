import React from 'react'
import { useParams } from 'react-router-dom';
function Useredit() {
    const param = useParams();
    console.log(param)
  return (
    <div>
      edit
    </div>
  )
}

export default Useredit;
