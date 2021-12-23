import React from "react";
import {NavLink} from "react-router-dom";
import styles from './Header.scss'

const links = {
    Shop: '/',
    FavoritePage: '/favorite',
    Cart: '/cart'
}
const exLinks = Object.entries(links).map(([title, link], index) => {
    return (
        <li key={index}>
            <NavLink exact activeStyle={{"color": '#4e4eb1'}} className='link' key={index} to={link}>{title}</NavLink>
        </li>
    )
})

const Header = () => {
    return (<header>
            <nav>
                <ul>
                    {exLinks}
                </ul>
            </nav>
        </header>
    )
}

export default Header