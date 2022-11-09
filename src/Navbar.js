import React from 'react';
import Logo from './Image.png';


const Navbar = () => {
  return (
    <div className='navbar'>
            <div ><img src={Logo} className= 'agva'></img></div>

<ul>
                <li><a href='#'>Home</a></li>
                <li ><a href= '#'>About Us</a></li>
                <li><a href='#'>Contact Us</a></li>
                <li><a href='#'>Press</a></li>


            </ul>
           
        </div>
        

  )
}

export default Navbar;
