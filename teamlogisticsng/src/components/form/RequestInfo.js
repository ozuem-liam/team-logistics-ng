import React, { Component } from 'react';
import '../../App.css';
import Navbar from '../Navbar';

class RequestInfo extends Component {
    render() {
        return (
            <div className="container">
                <Navbar />
                <div className="gridForm">
                <form>
                <h4 className="sub-title">Pickup Request</h4>
                <p className="title-p">
                We are commited to providing easy, fast and realiable service to our customers. Use our request form below to arrange a pickup and let our team of experts do the rest.
                </p>
                    <div className="singleItem">
                        <label htmlFor="companyName">Company Name</label>
                        <input type="text" 
                        name="companyName"
                        className="companyName"
                        placeholder=""/>
                    </div>
                    <div className="singleItem">
                        <label htmlFor="address">Ist line of Address</label>
                        <input type="text" 
                        name="address"
                        className="address"
                        placeholder=""/>
                    </div>
                    <div className="singleItem">
                        <label htmlFor="city">City</label>
                        <input type="text" 
                        name="city"
                        className="city"
                        placeholder=""/>
                    </div>
                    <div className="singleItem">
                        <label htmlFor="state">State</label>
                        <input type="text" 
                        name="state"
                        className="state"
                        placeholder=""/>
                    </div>
                    <div className="singleItem">
                        <label htmlFor="country">Country</label>
                        <input type="text" 
                        name="country"
                        className="country"
                        placeholder=""/>
                    </div>
                    <div className="singleItem">
                        <label htmlFor="zipCode">Zip code</label>
                        <input type="integer" 
                        name="zipCode"
                        className="zipCode"
                        placeholder=""/>
                    </div>
                    <div className="singleItem">
                        <label htmlFor="phone">Telephone / moblie</label>
                        <input type="integer" 
                        name="phone"
                        className="phone"
                        placeholder=""/>
                    </div>
                    <div className="singleItem">
                        <label htmlFor="fax">Fax</label>
                        <input type="text" 
                        name="fax"
                        className="fax"
                        placeholder=""/>
                    </div>
                    <div className="singleItem">
                        <label htmlFor="contactPerson">Contact Person</label>
                        <input type="text" 
                        name="contactPerson"
                        className="contactPerson"
                        placeholder=""/>
                    </div>
                    <div className="singleItem">
                        <label htmlFor="email">Email address</label>
                        <input type="text" 
                        name="email"
                        className="email"
                        placeholder=""/>
                    </div>
                    <div className="singleItem">
                        <label htmlFor="actualwt">Actual wt</label>
                        <input type="text" 
                        name="actualwt"
                        className="actualwt"
                        placeholder=""/>
                    </div>
                    <div className="singleItem">
                        <label htmlFor="volumewt">Volume wt</label>
                        <input type="text" 
                        name="volumewt"
                        className="volumewt"
                        placeholder=""/>
                    </div>
                    <div className="singleItem">
                        <label htmlFor="expectedwt">Expected shpt wt</label>
                        <input type="text" 
                        name="expectedwt"
                        className="expectedwt"
                        placeholder=""/>
                    </div>
                    <div className="singleItem">
                        <label htmlFor="pieces">Pieces</label>
                        <input type="text" 
                        name="pieces"
                        className="pieces"
                        placeholder=""/>
                    </div>
                    <div className="singleItem">
                        <label htmlFor="dg">Dg</label>
                        <input type="text" 
                        name="dg"
                        className="dg"
                        placeholder=""/>
                    </div>
                    <div className="singleItem">
                        <label htmlFor="expectedDate">Expected date of p/u</label>
                        <input type="date" 
                        name="expectedDate"
                        className="expectedDate"
                        placeholder=""/>
                    </div>
                    <div className="singleItem">
                        <label htmlFor="description">Good’s description</label>
                        <input type="text" 
                        name="description"
                        className="description"
                        placeholder=""/>
                    </div>
                    <div className="singleItem">
                        <label htmlFor="modeOfShipping">Mode of shipping</label>
                        <select>
                        <option value="Door to door">Door to door</option>
                        <option value="Door to airport">Door to airport</option>
                        <option value="Airport to airport">Airport to airport</option>
                        </select>
                    </div>

                    <h4 className="sub-title">Consignee's information</h4>

                    <div className="singleItem">
                        <label htmlFor="">Company Name</label>
                        <input type="" 
                        name=""
                        className=""
                        placeholder=""/>
                    </div>
                    <div className="singleItem">
                        <label htmlFor="">Full Address</label>
                        <input type="" 
                        name=""
                        className=""
                        placeholder=""/>
                    </div>
                    <div className="singleItem">
                        <label htmlFor="">Telephone</label>
                        <input type="" 
                        name=""
                        className=""
                        placeholder=""/>
                    </div>
                    <div className="singleItem">
                        <label htmlFor="">Fax</label>
                        <input type="" 
                        name=""
                        className=""
                        placeholder=""/>
                    </div>
                    <div className="singleItem">
                        <label htmlFor="">Contact person</label>
                        <input type="" 
                        name=""
                        className=""
                        placeholder=""/>
                    </div>
                    <div className="singleItem">
                        <label htmlFor="">Email</label>
                        <input type="" 
                        name=""
                        className=""
                        placeholder=""/>
                    </div>

                    <button type="submit" className="btn">Submit</button>
                </form>
                <div className="sideImg">
                    <img src="img/delivery-man.jpg" alt="a dilivery man" />
                </div>
                </div>
            </div>
        );
    }
}

export default RequestInfo;