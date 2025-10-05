import React from "react"
import styled from 'styled-components'

const MenuLinks = styled.nav`
    position: fixed;
    top: 0;
    right 0;
    transition: transform 300ms;
    transform: ${({ nav }) => (nav ? "translateX(0)" : "translateX(100%)")};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    width: 75%;
    background: #d7d7d7;
    opacity: .95;
    z-index: 4;
    ul {
        li {
            list-style: none;
            margin-bottom: 1rem;
            color: #057aff;
            font-size: 1.5em;
            border: 2px solid #057aff;
            padding: 0 1rem 0 1rem;
            
        }
    }

    a {
        transition: color 300ms;
        :hover {
            color: #6ab4ff;
        }
    }
`

const HamburgerMenu = ({nav}) => {

    return (
        <div className="flex justify-end">
            <MenuLinks nav={nav}>
                <ul>
                    <li>
                        <a href="/ai-strategy">AI Strategy</a>
                    </li>
                    <li>
                        <a href="/artificial-intelligence">Artificial Intelligence</a>
                    </li>
                    <li>
                        <a href="/analytics-engineering">Analytics Engineering</a>
                    </li>
                    <li>
                        <a href="/design">Design</a>
                    </li>
                    <li>
                        <a href="/my-journey">My Journey</a>
                    </li>
                    <li>
                        <a href="/about">About Me</a>
                    </li>
                </ul>
            </MenuLinks>
        </div>
    )

}

export default HamburgerMenu