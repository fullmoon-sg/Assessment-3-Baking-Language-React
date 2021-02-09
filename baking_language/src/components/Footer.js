import React from 'react'
import './css/Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';

export default function Footer() {
    return (
       
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col" style={{float:'left'}}>
                        <h4>Our Location </h4>
                        <ul className="list-unstyled">
                            <li>128 Sentosa Cove</li>
                            <li>Singapore</li>
                            <li>Tel: 111 1111</li>
                        </ul>
                    </div>
                    <div className="col" style={{float:'center'}}>
                        <h4>Follow Us</h4> 
                        <FacebookIcon m={1}/>
                        <InstagramIcon />
                        <EmailIcon/>
                    </div>
                    <div className="col">
                        <img style={{float:'right'}} src="https://res.cloudinary.com/fullmoon/image/upload/v1612878086/small_logo_kcs2jr.png" alt="Logo" height = "120" width="150"/>
                     
                    </div>
                </div>
                <hr/>
                 <div className="row">
                        <p className="col-sm" >
                            &copy;{new Date().getFullYear()} Baking Language | All Rights Reserved | Terms of Service | Privacy
                        </p>
                        <p>
                            *****Project for Educational Purposes*****
                        </p>
                    </div>
            </div>
        </div>
      
    )
}


