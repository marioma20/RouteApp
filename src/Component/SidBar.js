import './SidBar.css';
import { Link } from 'react-router-dom';
function SidBar(){
    return(
    <>
    <ul>
        <li className='mb-3 mt-3'>
            <Link to={"/products"} className='text-decoration-none'>
             Get All Products
             </Link>
        </li>
        <li>
            <a href="#" className='text-decoration-none'> Get All Categories</a>
        </li>
    </ul>
    </>
    );
}
export default SidBar;