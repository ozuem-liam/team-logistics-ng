import React, { Component } from 'react';

class CustomerSupport extends Component {
    render() {
        return (
            <div className="container">
                <img className="serv-pic" src="img/cust-serv.jpg" alt="customer service" />
               <h2 className="title">Customer Support</h2> 
               <p className="title-p">
               Everything that we do is geared to offer benefits to our customers. We have built our reputation by offering a reliable, efficient, cost effective and flexible service to meet the needs of shippers and customers both large and small.
               </p>
               <p className="title-p">
               Our commitment is to maintain the highest possible standards of service in every aspect of our business.We are always actively seeking ways to improve still further the service that we offer.
               </p>
               <p className="title-p">
               So what are the key benefits that we offer to our customers?
               </p>
               <ul className="customer-ul">
                   <li>Reliability</li>
                   <li>Time Saving</li>
                   <li>Flexibility</li>
                   <li>Personal Service</li>
                   <li>Cost Saving</li>
                   <li>Commitment to Quality</li>
               </ul>
               <p className="title-p">
               You too can enjoy our genuine care and honest approach, coupled with our positive ‘can do’ attitude, we do whatever it takes to meet daily needs as well as emergencies.
               </p>
               <p className="title-p">
               We’ll save you time through our vast experience, gained handling shipments of every type, by sea, air and road. We’ll save you money using that experience. Put simply, we ship the smartest way on your behalf.
               </p>
               <p className="title-p">
               We’ll take care of you and stay with your shipment from the time of booking until it reaches its final destination. We make it as easy as possible for you to contact us whether for advice, information or a full quotation.
               </p>
               <p className="title-p">
               <span>Contact us now and see why our customers keep coming back.</span>
               </p>
            </div>
        );
    }
}

export default CustomerSupport;