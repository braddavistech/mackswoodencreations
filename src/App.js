import React from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './containers/Home';
import Products from './containers/Products';
import Navbar from './containers/Navbar';
import ContactUs from './containers/ContactUs';
import Footer from './containers/Footer';

const background = require('./Wood4.jpg');


const MainDiv = styled.div`
    text-align: center;
    background-color: #9eaba1;
    min-height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .3)), url(${background});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
`;

function App() {
    return (
        <MainDiv>
            <Navbar />
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/products">
                            <Products />
                        </Route>
                        <Route exact path="/contact-us">
                            <ContactUs />
                        </Route>
                    </Switch>
                    {/* <nav>
                        <Link to="/">Home</Link>
                    </nav> */}

                    {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                </div>
            </Router>
            <Footer />
        </MainDiv>
    );
}

export default App;
