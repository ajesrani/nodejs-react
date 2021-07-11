import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from "react-router-dom";
import React from 'react';
import './../App.css';

const Nav = () => {
    return (
        <nav>
            <ul className="nav-links">
                <Link style={{color:"white"}} to="/">
                    <li>Home</li>
                </Link>
                <Link style={{color:"white"}} to="/shop">
                    <li>Shop</li>
                </Link>
                <Link style={{color:"white"}} to="/speech">
                    <li>Speech</li>
                </Link>
                <Link style={{color:"white"}} to="/avatar">
                    <li>Avatar</li>
                </Link>
                <Link style={{color:"white"}} to="/beer">
                    <li>Beer</li>
                </Link>
            </ul>
        </nav>
    )
}


export default Nav;