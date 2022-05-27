import React from "react"
import styled from 'styled-components'

const MenuLinks = styled.nav`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
    height: 100vh;
    width: 50%;
    background: #d7d7d7;
    opacity: .95;
    z-index: 4;
    ul {
        li {
            margin-bottom: 20px;
            color: #057aff;
            font-size: 1.5em;
        }
    }
`

const HamburgerMenu = () => {
    return (
        <div className="flex justify-end">
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