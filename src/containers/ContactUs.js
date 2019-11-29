import React from 'react';
import styled from 'styled-components';

const email = require('../emailIcon.png');
const phone = require('../phoneIcon.png');

const PageHeader = styled.h2`
    color: white;
    font-weight: bolder;
    font-size: 18px;
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

const Icon = styled.img`
    max-width: 30px;
    max-height: 22px;
    border-radius: 2px;
`;

const TextDiv = styled.h2`
    color: white;
    font-size: 18px;
    font-weight: bolder;
    width: 90%;
    margin: auto;
    text-align: center;
    ${({ padding }) => padding && `padding: ${padding};`}
    padding-bottom: 5px;
`;

const StyledA = styled.a`
    text-decoration: none;
    color: white;
    display: inline-flex;
`;

function ContactUs() {
    return (
        <div>
            <PageHeader>
                <TextDiv textAlign='left' padding='0 0 0 10px'>
                    Mack's Wooden Creations<br />
                    5217 Loves Chapel Rd<br />
                    Glennville, GA 30427<br /><br />
                    <StyledA href='mailto:maggybaxter@hotmail.com'><Icon src={email} alt="Email" />: maggybaxter@hotmail.com</StyledA><br />
                    <StyledA href='tel:9122375936'><Icon src={phone} alt="Phone" />: (912) 237-5036</StyledA>
                </TextDiv>
                <br />
                <br />
                Check out our Facebook page at<br /><br />
                <Website href="https://www.facebook.com/mackswoodencreations/" target="blank">https://www.facebook.com/mackswoodencreations/</Website>
            </PageHeader>
        </div>
    );
}

export default ContactUs;
