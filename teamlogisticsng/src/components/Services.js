import React, { Component } from 'react';
import '../App.css';

class Services extends Component {
    render() {
        return (
            <div class="container">
                <div>
                    <h2 className="title">Product &nbsp; Services</h2>
                    <p className="title-p">
                    Team Logistics is a leader in providing logistics services to a wide range of industry sectors including IT &nbsp; Technology, Food &nbsp; Drink, Print &nbsp; Packaging &nbsp; Automotive, as well as more general cargo.
                    Our clients range from Individual, Small Enterprices to Multi Nationals and all value our effective, no-nonsense, customer-focused approach to providing cost effective logistics solutions.
                    </p>
                </div>
                <div className="row1">
                    <div className="col2">
                    <i className="far fa-paper-plane ic"></i>
                    <div className="col1">
                        <h4 className="sub-title">AIRFREIGHT</h4>
                        <p>
                            Team Logistics Ltd offer a full range of airfreight solutions via our network of WLN approved agents. Through our partner facilities located at major airports worldwide we can offer our clients a comprehensive range of services. If your requirements are for Import or Export freight please contact our staff so we can discuss your requirements and tailor a package to suit your timescale and budget.
                        </p>
                    </div>
                    </div>

                    <div className="col2">
                        <i className="fas fa-file-signature ic"></i>
                        <div className="col1">
                        <h4 className="sub-title">CONTRACT PURCHASE</h4>
                        <p>
                        With this service our clients can now place orders for items anywhere in the world via us and have it shipped to their seleted distination. Speak to a member of our customer staff to learn more about this service.
                        </p>
                        </div>
                    </div>

                    <div className="col2">
                    <i class="fas fa-water ic"></i>
                    <div className="col1">
                    <h4 className="sub-title">SEAFREIGHT</h4>
                    <p>
                    Team Logistics Ltd operates a worldwide service through our established network of agents. The business strength of our overseas partners and their relationship with the shipping lines enables us to offer competitive rates to our clients for Import, Export and Cross Trade shipments.
                    <p>Services include: -</p>
                    <ul>
                        <li>Full Container Loads (FCL)</li>
                        <li>Part Container Loads (LCL)</li>
                        <li>Freight Consolidation</li>
                        <li>Refrigerated Cargo</li>
                        <li>Hazardous Cargo</li>
                    </ul>
                    </p>
                    </div>
                    </div>
                    <div className="col2">
                    <i class="fas fa-truck ic"></i>
                    <div className="col1">
                    <h4 className="sub-title">LOGISTICS</h4>
                    <p>
                    Team Logistics Ltd have a full range of lifting and handling equipment
                    <p>Services include: -</p>
                    <ul>
                        <li>Secure Storage - Bonded and General</li>
                        <li>Order Picking and Distribution</li>
                        <li>Consolidation</li>
                        <li>De-vanning and Re-vanning</li>
                        <li>Palletising</li>
                        <li>Shrink Wrapping</li>
                        <li>Export Case Making</li>
                    </ul>
                    </p>
                    </div>
                    </div>
                </div>
                <div className="row1">

                    <div className="col2">
                    <i class="fas fa-landmark ic"></i>
                    <div className="col1">
                    <h4 className="sub-title">LAND</h4>
                    <p>
                    Team Logistics Ltd can offer a full range of surface freight options.
                    <p>Services include: -</p>
                    <ul>
                        <li>Container Transport (Road)</li>
                        <li>Abnormal Loads</li>
                        <li>Courier Services</li>
                        <li>Express Same Day Vans</li>
                    </ul>
                    Our customer service team can advise you on the most cost effective way to transport your cargo taking into consideration any restrictions with loading and unloading, time scales and cost.
                    </p>
                    </div>
                    </div>

                    <div className="col2">
                    <i class="fab fa-intercom ic"></i>
                    <div className="col1">
                    <h4 className="sub-title">CUSTOMS</h4>
                    <p>
                    Team Logistics Ltd is experienced in all aspects of customs procedures. We have location close to Customs EPU (Entry Processing Unit) for convenience of lodging all necessary documentation. 
                    <p>Services include: -</p>
                    <ul>
                        <li>Import and Export Declarations</li>
                        <li>Customs Clearance</li>
                        <li>Customs Classification</li>
                        <li>Customs Consultancy</li>
                    </ul>
                    All major domestic and international airports are serviced through our partner offices.
                    </p>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;