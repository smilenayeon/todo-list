import React,{useState} from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
    const[isOpen, setIsOpen]=useState(false);
    const toggleMenu=()=>{setIsOpen(!isOpen)};
  return (
    <div className='navbar-container'>
            <button className='hamburger-menu' onClick={toggleMenu}>
                <div className= {`menuIcon ${isOpen ? 'visible' : ''}`}></div>
            </button>
            <ul className={`link-list ${isOpen ? 'show' : ''}`}>
                <li onClick={toggleMenu}><Link to="/">Home</Link></li>
                <li onClick={toggleMenu}><Link to="/calendar">Calendar</Link></li>
                <li onClick={toggleMenu}><Link to="/progress">Progress</Link></li>
                <li onClick={toggleMenu}><Link to="/add">Add</Link></li>
            </ul>
            <button className='quick-add-button'>
                <Link to="/add"><i className="fa-solid fa-plus"></i></Link>
            </button>

    </div>
  )
}

export default Navbar