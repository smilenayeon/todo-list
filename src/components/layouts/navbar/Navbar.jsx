import React,{useState} from 'react'
import './Navbar.css';

function Navbar() {
    const[isOpen, setIsOpen]=useState(false);
    const toggleMenu=()=>{setIsOpen(!isOpen)};
  return (
    <div className='navbar-container'>
            <button className='hamburger-menu' onClick={toggleMenu}>
                <div className= {`menuIcon ${isOpen ? 'visible' : ''}`}></div>
            </button>
            <ul className={`link-list ${isOpen ? 'show' : ''}`}>
                <li>Home</li>
                <li>Calendar</li>
                <li>Progress</li>
                <li>Add</li>
            </ul>
            <button className='quick-add-button'>
                <i className="fa-solid fa-plus"></i>
            </button>

    </div>
  )
}

export default Navbar