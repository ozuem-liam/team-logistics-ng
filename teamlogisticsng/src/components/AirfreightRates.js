import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class AirfreightRates extends Component {
    render() {
        return (
            <div className="container">
                <button className="btn">
                  <Link to="/requestform">Pickup Request</Link>
                </button>

                
            </div>
        );
    }
}

export default AirfreightRates;