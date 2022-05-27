import React, { useState } from "react"
import styled from 'styled-components'
import HamburgerMenu from "./hamburger-menu"

const MenuIcon = styled.button`
    position: fixed;
    top: 0.5rem;  
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 1.5rem;
    height: 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 5; 

    div {
        width: 1.5rem;
        height: .2rem;
        background: lightslategrey;
        border-radius: 5px;
        transform-origin: 1px;

        :first-child {
            transform: ${({nav}) => nav ? 'rotate(45deg)' : 'rotate(0)'}
        }
    
        :nth-child(2) {
            opacity: ${({nav}) => nav ? '0' : '1'}
        }

        :nth-child(3) {
            transform: ${({nav}) => nav ? 'rotate(-45deg)' : 'rotate(0)'}
        }
        transition: opacity 300ms, transform 300ms;
    }
`

const Hamburger = () => {

    const [nav, showNav] = useState(false)

    return (
        <div className="md:hidden">
            <MenuIcon nav={nav} onClick={ () => showNav(!nav) } >
                <div/>
                <div/>
                <div/>
            </MenuIcon>
            <HamburgerMenu nav={nav}/>
            
        </div>
    )

}

export default Hamburger