import React from 'react';
import styled from 'styled-components';

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
    max-width: 20vw;
    max-height: 10vh;
    margin-top: 10px;
    border-radius: 15px;
`;

function Home() {
    return (
        <div>
            <PageHeader>
                Our site is currently under construction.<br />
                Check back with us soon to see our latest creations.<br />
                <br />
            </PageHeader>
        </div>
    );
}

export default Home;
