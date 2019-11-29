import React from 'react';
import styled from 'styled-components';


const ProductDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    padding-bottom: 12vh;
`;

const Photo = styled.img`
    margin: auto;
    max-width: 30vw;
    max-height: 40vh;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const prod1 = require('../Product1.png');
const prod2 = require('../Product2.png');
const prod3 = require('../Product3.png');
const prod4 = require('../Product4.png');
const prod5 = require('../Product5.png');
const prod6 = require('../Product6.png');
const prod7 = require('../Product7.png');

function Products() {
    return (
        <ProductDiv>
            <Photo src={prod1} alt='Product 1' />
            <Photo src={prod2} alt='Product 2' />
            <Photo src={prod3} alt='Product 3' />
            <Photo src={prod4} alt='Product 4' />
            <Photo src={prod5} alt='Product 5' />
            <Photo src={prod6} alt='Product 6' />
            <Photo src={prod7} alt='Product 7' />
        </ProductDiv>
    );
}

export default Products;
