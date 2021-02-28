import React from 'react'
import Logo from '../img/sushilogo.png'
import './css/Navigation.css'

const Navigation = () => {
    return (
        <header className="navbar-main">
            <ul className="navbar-list">
                <li key="1" className="nav-item">
                    <img style={{width: '400px'}} title="Number six, best sushi in town" alt="Number six, best sushi in town" src={Logo} />
                </li>
            </ul>
        </header>
    )
}

export default Navigation
