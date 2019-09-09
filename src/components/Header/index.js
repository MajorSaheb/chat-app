import React from 'react';
import './header.css';
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <div className="headerMain">
            <Link to="/">
                <button >LogOut</button>
            </Link>
            <b>{props.name}</b>
        </div>
    );
}

export default Header;