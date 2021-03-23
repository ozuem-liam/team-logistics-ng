import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="title">Contact Us</h2>
                <div className="contact-flex">
                    <div className="con2">
                    <i class="fas fa-map-marker-alt cic"></i>
                        <div className="con1">
                        <h2 className="sub-title">Our Address</h2>
                        <p>
                        Team Logistics Nig Ltd. <br/>
                        Suite 109, Ogba Shopping Arcade, <br/>
                        Ijaiye Road, Ogba - Ikeja <br/>
                        Lagos
                        </p>
                        </div>
                    </div>
                    <div className="con2">
                    <i class="fas fa-envelope-square cic"></i>
                    <div className="con1">
                        <h2 className="sub-title">Email Us</h2>
                        <p>
                        info@teamlogisticsng.com
                        </p>
                    </div>
                    </div>
                    <div className="con2">
                    <i class="fas fa-phone-alt cic"></i>
                    <div className="con1">
                        <h2 className="sub-title">Our Address</h2>
                        <p>
                        +234 764 7625 <br/> +234 807 561 1465 <br/> +234 80 38603951
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;