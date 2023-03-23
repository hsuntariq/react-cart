import React from 'react'
import { UseGlobalContext } from './Context'

const Nav = () => {
    const { value } = UseGlobalContext();
return (
    <>
        <div className="navbar navbar-expand-lg">
            <div className="navbar-brand">
                <img style={{width:'30px'}} src="https://images.unsplash.com/photo-1590621819878-3fa04495626c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFydHdvcmt8ZW58MHx8MHx8&w=1000&q=80" alt="" />
            </div>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a href="/" className="nav-link">
                        <h6>Cart ({value})</h6>
                    </a>
                </li>
            </ul>
        </div>
    </>
)
}

export default Nav
