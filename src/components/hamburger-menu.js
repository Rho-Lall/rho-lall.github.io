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
    text-align: left;
    height: 100vh;
    width: 50%;
    background: #d7d7d7;
    opacity: .95;
    z-index: 4;
    ul {
        li {
            margin-bottom: 1rem;
            color: #057aff;
            font-size: 1.5em;
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
                        <a href="/business">Business Acumen</a>
                    </li>
                    <li>
                        <a href="/datascience">Data Science</a>
                    </li>
                    <li>
                        <a href="/development">Development</a>
                    </li>
                    <li>
                        <a href="/design">Design</a>
                    </li>
                    <li>
                        <a href="/journey">My Journey</a>
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