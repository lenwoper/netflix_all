import React from "react";
import { NavLink } from "react-router-dom"
import './styling.css';



function Footer() {




    return (
        <>
            {/* 
        
        FAQHelp CentreAccountMedia CentreInvestor RelationsJobsWays to WatchTerms of UsePrivacyCookie PreferencesCorporate InformationContact UsSpeed TestLegal NoticesOnly on Netflix
        
        */}
            <footer>
                <div className="number"> Questions Call ? <a id="in_number" href="">1800-30000-123</a></div>
                <div className="footer_part">
                    <li>    FAQ </li>
                    <li> Centre </li>
                    <li> Account </li>
                    <li> Media </li>
                </div>

                {/* it is second part  */}
                <div className="footer_part">
                    <li> Investor </li>
                    <li> Relations </li>
                    <li> Jobs </li>
                    <li> Ways</li>
                </div>
                {/* that is thrd part of the footer  */}
                <div className="footer_part">
                    <li >   Watch  </li>
                    <li> Terms of Use</li>
                    <li> Privacy </li>
                    <li> Cookie </li>
                </div>
                {/* that is fourth part */}
                <div className="footer_part">
                    <li> Preferences </li>
                    <li> Corporate </li>
                    <li> Information </li>
                    <li> Contact </li>
                </div>
                <div id="netflix_country" > <strong>Netflix India </strong> </div>
          
          <div id="dev">&copy; 2021 - 2023 | developed by <a href="">Lenwoper</a>  </div>
            </footer>
        </>
    )
}
export default Footer;