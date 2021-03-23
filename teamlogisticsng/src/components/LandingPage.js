import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

class LandingPage extends Component {
    render() {
        return (
            <div className="container landing-page">
                <div className="overlay">
                    <h3>Welcome To Team Logistics Nig. Ltd</h3>
                    <h4>We accelerate the pace of improvement 
                        through our customer's progress and seek 
                        for expansion on daily basis.</h4>
                    <button className="btn">
                        <Link to="/requestform">Get Started</Link>
                    </button>
                </div>
            </div>
        );
    }
}

export default LandingPage;