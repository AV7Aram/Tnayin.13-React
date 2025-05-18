import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from '../Nav/Nav'

import './Header.css'

export const Header = ({ socialIcons, classIcons, infoIcons }) => {
    return (
        <header>
            <Nav socialIcons={socialIcons} classIcons={classIcons} infoIcons={infoIcons} />
            <div className='header-container'>
                <NavLink to='/' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
                <NavLink to='/products' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Products</NavLink>
            </div>
        </header>
    )
}