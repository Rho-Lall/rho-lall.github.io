import React from "react"
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
        width: 2rem;
        height: .2rem;
        background: lightslategrey;
        border-radius: 5px;
        transform-origin: 1px;
    }
`

const Hamburger = () => {
    return (
        <div className="md:hidden">
            <MenuIcon className="">
                <div/>
                <div/>
                <div/>
            </MenuIcon>
            <HamburgerMenu/>
            
        </div>
    )

}

export default Hamburger