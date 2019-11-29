import React from 'react';
import styled from 'styled-components';
import { Router, Link } from "react-router-dom";

const TopNav = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const Logo = styled.img`
    max-width: 60vw;
    max-height: 120px;
`;

const NavLinks = styled.div`
    width: 100%;
    margin: auto;
    margin-top: 5px;
    padding: 2px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: white;
`;

const NavButtons = styled.a`
    text-decoration: none;
    width: 33.3%;
    color: ${({ color }) => color !== 'false' ? '#6f451d' : '#adabab'};
    font-weight: bold;
    font-size: 18px;
    &:hover {
        color: black;
    }
`;

function Navbar() {

    return (
        <TopNav>
            <Logo src={require('../OvalLogo.png')} alt="mackslogo" />
            <NavLinks>
                <NavButtons href='/' color={(window.location.pathname === '/').toString()}>Home</NavButtons>
                <NavButtons href='/products' color={(window.location.pathname === '/products').toString()}>Products</NavButtons>
                <NavButtons href='/contact-us' color={(window.location.pathname === '/contact-us').toString()}>Contact Us</NavButtons>
            </NavLinks>
        </TopNav>
    );
}

export default Navbar;
