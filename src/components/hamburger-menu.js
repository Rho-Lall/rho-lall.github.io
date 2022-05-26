import React from "react"
import styled from 'styled-components'

const MenuLinks = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
    height: 100vh;
    width: 100%;
    background: #d7d7d7;
    z-index: 5; 
`

const HamburgerMenu = () => {
    return (
        <div>
            <MenuLinks>
                <ul>
                    <li>
                        <a href="#">Business Acumen</a>
                    </li>
                    <li>
                        <a href="#">Data Science</a>
                    </li>
                    <li>
                        <a href="#">Development</a>
                    </li>
                    <li>
                        <a href="#">Design</a>
                    </li>
                    <li>
                        <a href="#">My Journey</a>
                    </li>
                    <li>
                        <a href="#">About Me</a>
                    </li>
                </ul>
            </MenuLinks>
        </div>
    )

}

export default HamburgerMenu