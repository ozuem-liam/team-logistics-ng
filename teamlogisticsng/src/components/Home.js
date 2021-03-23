import React, { Component } from 'react';
// components
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Company from './Company';
import Services from './Services';
import CustomerSupport from './CustomerSupport';
import AirfreightRates from './AirfreightRates';
import Contact from './Contact';
import Footer from './Footer';

class Home extends Component {
    render() {
        return (
            <div>
                <LandingPage />
                <Navbar />
                <Company />
                <Services />
                <CustomerSupport />
                <AirfreightRates />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default Home;