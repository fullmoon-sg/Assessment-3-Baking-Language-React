import React from 'react'
import './css/Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';

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
                        <FacebookIcon onClick={event =>  window.location.href='https://www.facebook.com/Baking-Language-1472693163005638/?ref=bookmarks'}/>
                        <InstagramIcon onClick={event =>  window.location.href='https://www.instagram.com/bakinglanguage/'} />
                        <PinterestIcon onClick={event =>  window.location.href='https://www.pinterest.com/bakinglanguage/'}/>
                    </div>
                    <div className="col">
                        <img id="pic" style={{float:'right'}} src="https://res.cloudinary.com/fullmoon/image/upload/v1612878086/small_logo_kcs2jr.png" alt="Logo" height = "100" width="125"/>
                     
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


