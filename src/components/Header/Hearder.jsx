
import "./Hearder.css";
import { CartShop } from '../Assets/svg/CartShop.jsx'
import SearchIcon from '../Assets/svg/SearchIcon.jsx'
import LoginIcon from '../Assets/svg/LoginIcon.jsx'
import { Link } from 'react-router-dom';

export default function Hearder() {



  return (
    <div className='header'>
     <h1>Tech<span className='blue'>F</span>ith</h1>
     <div className='nav-icon'>
        <div className='icon-search'>
        <SearchIcon/> 
        </div>
        <div className='icon-cart'>
          <Link to= "/carrito"><CartShop/></Link>
        <div className='nav-car-count'>
          0  
        </div>
        </div>
        <div className='icon-login'>
        <Link to="/login"><LoginIcon/></Link>
        </div>
      </div>
    </div>
  )
}
