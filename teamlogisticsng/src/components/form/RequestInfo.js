import React, { Component } from 'react';
import '../../App.css';

import axios from 'axios';

import Navbar from '../Navbar';

class RequestInfo extends Component {

state={
    companyName:'',
    address:'',
    city:'',
    state:'',
    country:'',
    zipCode:'',
    phone:'',
    fax:'',
    contactPerson:'',
    email:'',
    actualwt:'',
    volumewt:'',
    expectedwt:'',
    pieces:'',
    dg:'',
    expectedDate:'',
    description:'',
    modeOfShipping:'',
    consigneeCompanyName:'',
    fullAddress:'',
    tel:'',
    consigneeFax:'',
    consigneeContactPerson:'',
    consigneeEmail:'',
    sent:false
}


// handle Inputs
handleCompanyName = (e) => {
    this.setState({
        companyName: e.target.value
    })
}
handleAddress = (e) => {
    this.setState({
        address: e.target.value
    })
}
handleCity = (e) => {
    this.setState({
        city: e.target.value
    })
}
handleState = (e) => {
    this.setState({
        state: e.target.value
    })
}
handleCountry = (e) => {
    this.setState({
        country: e.target.value
    })
}
handleZipCode = (e) => {
    this.setState({
        zipCode: e.target.value
    })
}
handlePhone = (e) => {
    this.setState({
        phone: e.target.value
    })
}
handleFax = (e) => {
    this.setState({
        fax: e.target.value
    })
}
handleContactPerson = (e) => {
    this.setState({
        contactPerson: e.target.value
    })
}
handleEmail = (e) => {
    this.setState({
        email: e.target.value
    })
}
handleActualWt = (e) => {
    this.setState({
        actualwt: e.target.value
    })
}
handleVolumeWt = (e) => {
    this.setState({
        volumewt: e.target.value
    })
}
handleExpectedWt = (e) => {
    this.setState({
        expectedwt: e.target.value
    })
}
handlePieces = (e) => {
    this.setState({
        pieces: e.target.value
    })
}
handleDg = (e) => {
    this.setState({
        dg: e.target.value
    })
}
handleExpectedDate = (e) => {
    this.setState({
        expectedDate: e.target.value
    })
}
handleDescription = (e) => {
    this.setState({
        description: e.target.value
    })
}
handleModeOfShipping = (e) => {
    this.setState({
        modeOfShipping: e.target.value
    })
}
handleConsigneeCompanyName = (e) => {
    this.setState({
        consigneeCompanyName: e.target.value
    })
}
handleFullAddress = (e) => {
    this.setState({
        fullAddress: e.target.value
    })
}
handleTel = (e) => {
    this.setState({
        tel: e.target.value
    })
}
handleConsigneeFax = (e) => {
    this.setState({
        consigneeFax: e.target.value
    })
}
handleConsigneeContactPerson = (e) => {
    this.setState({
        consigneeContactPerson: e.target.value
    })
}
handleConsigneeEmail = (e) => {
    this.setState({
        consigneeEmail: e.target.value
    })
}

// end of handle inputs

formSubmit = (e) => {
    e.preventDefault();

    let data = {
        companyName:this.state.companyName,
        address:this.state.address,
        city:this.state.city,
        state:this.state.state,
        country:this.state.country,
        zipCode:this.state.zipCode,
        phone:this.state.phone,
        fax:this.state.fax,
        contactPerson:this.state.contactPerson,
        email:this.state.email,
        actualwt:this.state.actualwt,
        volumewt:this.state.volumewt,
        expectedwt:this.state.expectedwt,
        pieces:this.state.pieces,
        dg:this.state.dg,
        expectedDate:this.state.expectedDate,
        description:this.state.description,
        modeOfShipping:this.state.modeOfShipping,
        consigneeCompanyName:this.state.consigneeCompanyName,
        fullAdress:this.state.fullAdress,
        tel:this.state.tel,
        consigneeFax:this.state.consigneeFax,
        consigneeContactPerson:this.state.consigneeContactPerson,
        consigneeEmail:this.state.consigneeEmail
    }

    axios.post('https://teamlogisticsng.herokuapp.com/api/forminfo', data)
    .then(data => {
        this.setState({
            sent:true,
        },this.resetForm())
    }).catch(() => {
        console.log('message not sent');
    })
}

// for reseting initial data
resetForm = () => {
    this.setState({
        companyName:'',
        address:'',
        city:'',
        state:'',
        country:'',
        zipCode:'',
        phone:'',
        fax:'',
        contactPerson:'',
        email:'',
        actualwt:'',
        volumewt:'',
        expectedwt:'',
        pieces:'',
        dg:'',
        expectedDate:'',
        description:'',
        modeOfShipping:'',
        consigneeCompanyName:'',
        fullAddress:'',
        tel:'',
        consigneeFax:'',
        consigneeContactPerson:'',
        consigneeEmail:''
    })

    setTimeout(()=>{
        this.setState({
            sent:false,
        })
    }, 3000)
}

    render() {
        return (
            <div className="container">
                <Navbar />
                <div className="gridForm">
                <form onSubmit={this.formSubmit}>
                <h4 className="sub-title">Pickup Request</h4>
                <p className="title-p">
                We are commited to providing easy, fast and realiable service to our customers. Use our request form below to arrange a pickup and let our team of experts do the rest.
                </p>
                    <div className="singleItem">
                        <label htmlFor="companyName">Company Name</label>
                        <input type="text" 
                        name="companyName"
                        className="companyName"
                        placeholder=""
                        value={this.state.companyName}
                        onChange={this.handleCompanyName}
                        />
                    </div>
                    <div className="singleItem">
                        <label htmlFor="address">Ist line of Address</label>
                        <input type="text" 
                        name="address"
                        className="address"
                        placeholder=""
                        value={this.state.address}
                        onChange={this.handleAddress}
                        />
                    </div>
                    <div className="singleItem">
                        <label htmlFor="city">City</label>
                        <input type="text" 
                        name="city"
                        className="city"
                        placeholder=""
                        value={this.state.city}
                        onChange={this.handleCity}
                        />
                    </div>
                    <div className="singleItem">
                        <label htmlFor="state">State</label>
                        <input type="text" 
                        name="state"
                        className="state"
                        placeholder=""
                        value={this.state.state}
                        onChange={this.handleState}
                        />
                    </div>
                    <div className="singleItem">
                        <label htmlFor="country">Country</label>
                        <input type="text" 
                        name="country"
                        className="country"
                        placeholder=""
                        value={this.state.country}
                        onChange={this.handleCountry}
                        />
                    </div>
                    <div className="singleItem">
                        <label htmlFor="zipCode">Zip code</label>
                        <input type="text" 
                        name="zipCode"
                        className="zipCode"
                        placeholder=""
                        value={this.state.zipCode}
                        onChange={this.handleZipCode}
                        />
                    </div>
                    <div className="singleItem">
                        <label htmlFor="phone">Telephone / moblie</label>
                        <input type="text" 
                        name="phone"
                        className="phone"
                        placeholder=""
                        value={this.state.phone}
                        onChange={this.handlePhone}
                        />
                    </div>
                    <div className="singleItem">
                        <label htmlFor="fax">Fax</label>
                        <input type="text" 
                        name="fax"
                        className="fax"
                        placeholder=""
                        value={this.state.fax}
                        onChange={this.handleFax}
                        />
                    </div>
                    <div className="singleItem">
                        <label htmlFor="contactPerson">Contact Person</label>
                        <input type="text" 
                        name="contactPerson"
                        className="contactPerson"
                        placeholder=""
                        value={this.state.contactPerson}
                        onChange={this.handleContactPerson}
                        />
                    </div>
                    <div className="singleItem">
                        <label htmlFor="email">Email address</label>
                        <input type="text" 
                        name="email"
                        className="email"
                        placeholder=""
                        value={this.state.email}
                        onChange={this.handleEmail}
                        />
                    </div>
                    <div className="singleItem">
                        <label htmlFor="actualwt">Actual wt</label>
                        <input type="text" 
                        name="actualwt"
                        className="actualwt"
                        placeholder=""
                        value={this.state.actualwt}
                        onChange={this.handleActualWt}
                        />
                    </div>
                    <div className="singleItem">
                        <label htmlFor="volumewt">Volume wt</label>
                        <input type="text" 
                        name="volumewt"
                        className="volumewt"
                        placeholder=""
                        value={this.state.volumewt}
                        onChange={this.handleVolumeWt}
                        />
                    </div>
                    <div className="singleItem">
                        <label htmlFor="expectedwt">Expected shpt wt</label>
                        <input type="text" 
                        name="expectedwt"
                        className="expectedwt"
                        placeholder=""
                        value={this.state.expectedwt}
                        onChange={this.handleExpectedWt}
                        />
                    </div>
                    <div className="singleItem">
                        <label htmlFor="pieces">Pieces</label>
                        <input type="text" 
                        name="pieces"
                        className="pieces"
                        placeholder=""
                        value={this.state.pieces}
                        onChange={this.handlePieces}
                        />
                    </div>
                    <div className="singleItem">
                        <label htmlFor="dg">Dg</label>
                        <input type="text" 
                        name="dg"
                        className="dg"
                        placeholder=""
                        value={this.state.dg}
                        onChange={this.handleDg}
                        />
                    </div>
                    <div className="singleItem">
                        <label htmlFor="expectedDate">Expected date of p/u</label>
                        <input type="date" 
                        name="expectedDate"
                        className="expectedDate"
                        placeholder=""
                        value={this.state.expectedDate}
                        onChange={this.handleExpectedDate}
                        />
                    </div>
                    <div className="singleItem">
                        <label htmlFor="description">Good’s description</label>
                        <input type="text" 
                        name="description"
                        className="description"
                        placeholder=""
                        value={this.state.description}
                        onChange={this.handleDescription}
                        />
                    </div>
                    <div className="singleItem">
                        <label htmlFor="modeOfShipping">Mode of shipping</label>
                        <select 
                        name="modeOfShipping"
                        className="modeOfShipping"
                        placeholder=""
                        value={this.state.modeOfShipping}
                        onChange={this.handleModeOfShipping}>
                        <option value="Door to door">Door to door</option>
                        <option value="Door to airport">Door to airport</option>
                        <option value="Airport to airport">Airport to airport</option>
                        </select>
                    </div>

                    <h4 className="sub-title">Consignee's information</h4>

                    <div className="singleItem">
                        <label htmlFor="consigneeCompanyName">Company Name</label>
                        <input type="text" 
                        name="consigneeCompanyName"
                        className="consigneeCompanyName"
                        placeholder=""
                        value={this.state.consigneeCompanyName}
                        onChange={this.handleConsigneeCompanyName}
                        />
                    </div>
                    <div className="singleItem">
                        <label htmlFor="fullAddress">Full Address</label>
                        <input type="text" 
                        name="fullAddress"
                        className="fullAddress"
                        placeholder=""
                        value={this.state.fullAddress}
                        onChange={this.handleFullAddress}
                        />
                    </div>
                    <div className="singleItem">
                        <label htmlFor="tel">Telephone</label>
                        <input type="text" 
                        name="tel"
                        className="tel"
                        placeholder=""
                        value={this.state.tel}
                        onChange={this.handleTel}
                        />
                    </div>
                    <div className="singleItem">
                        <label htmlFor="consigneeFax">Fax</label>
                        <input type="text" 
                        name="consigneeFax"
                        className="consigneeFax"
                        placeholder=""
                        value={this.state.consigneeFax}
                        onChange={this.handleConsigneeFax}
                        />
                    </div>
                    <div className="singleItem">
                        <label htmlFor="consigneeContactPerson">Contact person</label>
                        <input type="text" 
                        name="consigneeContactPerson"
                        className="consigneeContactPerson"
                        placeholder=""
                        value={this.state.consigneeContactPerson}
                        onChange={this.handleConsigneeContactPerson}
                        />
                    </div>
                    <div className="singleItem">
                        <label htmlFor="consigneeEmail">Email</label>
                        <input type="text " 
                        name="consigneeEmail"
                        className="consigneeEmail"
                        placeholder=""
                        value={this.state.consigneeEmail}
                        onChange={this.handleConsigneeEmail}
                        />
                    </div>
                    <div className={this.state.sent ? 'msg msgAppear': 'msg'}>Message has been sent</div>
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