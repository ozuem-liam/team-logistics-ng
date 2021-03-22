import React, { Component } from 'react';
import '../App.css';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid nav-bar">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            <img alt="Brand" src="img/logo.jpg" />
                        </a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home <span className="sr-only">(current)</span></a></li>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Customer Support</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>


                    <button type="button" className="navbar-toggle collapsed btn-bar" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar bar"></span>
                            <span className="icon-bar bar"></span>
                            <span className="icon-bar bar"></span>
                    </button>
            </nav>
        );
    }
}
