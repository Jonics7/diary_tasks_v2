import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.sass';

export default function Header() {
    return (
        <div className="header">
            <div className="links">
                <NavLink to="/">Home</NavLink>
            </div>
        </div>
    )
}
