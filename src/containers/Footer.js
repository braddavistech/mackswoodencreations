import React from 'react';
import styled from 'styled-components';

const facebook = require('../facebookName.jpg');

const FooterDiv = styled.div`
    position: fixed;
    bottom: 0;
    background-color: black;
`;

const FullTextDiv = styled.div`
    display: flex;
    flex-direction: row;
    color: white;
    font-weight: bolder;
    text-align: center;
    width: 100vw;
    margin: 0;
    padding: 2px 0px;
`;

const TextDiv = styled.h2`
    color: white;
    font-weight: 500;
    font-size: 16px;
    width: 33.3%;
    margin: 0;
    ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
    ${({ padding }) => padding && `padding: ${padding};`}
    padding-bottom: 5px;
`;

const Email = styled.a`
    text-decoration: none;
    color: white;
`;

const IconDiv = styled.div`
    width: 100%;
    margin: auto;
`;

const Icon = styled.img`
    max-width: 10vw;
    max-height: 5vh;
`;

const Website = styled.a`
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-weight: bolder;
    &:hover {
        color: #6f451d;
    }
`;



function Footer() {
    return (
        <FooterDiv>
            <hr />
            <FullTextDiv>
                <TextDiv textAlign='left' padding='0 0 0 10px'><Email href='mailto:maggybaxter@hotmail.com'>Email Us</Email></TextDiv>
                <TextDiv textAlign='center'>
                    <Website href="https://www.facebook.com/mackswoodencreations/" target="blank">
                        <Icon src={facebook} alt='Facebook' />
                    </Website>
                </TextDiv>
                <TextDiv textAlign='right' padding='0 10px 0 0'><Email href='tel:9122375936'>(912) 237-5036</Email></TextDiv>
            </FullTextDiv>
        </FooterDiv>
    );
}

export default Footer;
