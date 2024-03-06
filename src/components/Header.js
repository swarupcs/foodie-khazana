import React from 'react';
import Logo from "../assets/images/foodiekhazana.png"
import { Link } from 'react-router-dom';

const Title = () => (
    <a href="/">
        <img className="h-28 p-2" src={Logo} alt="Logo" />
    </a>
)

const Header = () => {
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
      <Title/>
      <div className='nav-items'>
        <ul className='flex py-10'>
            <li className='px-2'>
                <Link to="/">Home</Link>
            </li>
            <li className='px-2'>
            <Link to="/about">About</Link>
            </li>
            <li className='px-2'>
            <Link to="/contact">Contact</Link>
                
            </li>
            <li className='px-2'>
            <Link to="/cart">Cart</Link>
            </li>
            <li className='px-2'>
            <Link to="/instamrt">Instamrt</Link>
            </li>
        </ul>
      </div>
      
    </div>
  )
}

export default Header
