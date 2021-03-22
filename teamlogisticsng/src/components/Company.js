import React, { Component } from 'react';
import '../App.css';

class Company extends Component {
    render() {
        return (
            <div className="container company-fix">
                <div>
                    <img className="serv-pic" src="img/serv-pic.jpg" alt="a moving vehicle and a ship" />
                </div>

                <div className="container company">
                        <aside>
                          <img src="img/man.jpg" alt="a man" />
                        </aside>
                        <p>
                         <span>TEAM LOGISTICS NIG LTD</span> is a Nigerian base logistics company that has partners in all the continent of the world, currently engage in freight management, warehousing, distribution, shipping documentation and other shipping related activities.
                        </p>

                        <p>
                        We have been in international market since 2005 and strategically and globally positioned with the best brains within the industry with full capacity needed to offer end-to-end specific logistics solutions to all crops of customers; Door -to- Door, Door- to- Airport , Airport -to- Airport etc.   
                        </p>
                        <p>
                        We accelerate the pace of improvement through our customer's progress and seek for expansion on daily basis.  
                        </p>
                       
                        <span className="marquee">TEAMLOGISTICS! TEAMWORK!! SMOOTH DELIVERY!!!</span>
                   
                        
                </div>
            </div>
        );
    }
}

export default Company;