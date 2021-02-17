import React from 'react';
import { Redirect } from 'react-router-dom'
import HomeCarousel from './HomeCarousel'
import axios from 'axios';
//  
import './css/Home.css'

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            redirect: false,
        }
        this.logout = this.logout.bind(this)
    }

    // componentWillMount() {
    //     if (sessionStorage.getItem("userData")) {
    //         console.log("Call user feed")
    //     } else {
    //         this.setState({
    //             redirect: false
    //         })
    //     }
    // }

    // componentDidMount(){
    //     axios.get('api/user/profile').then(
    //         res => {
    //             console.log(res);
    //         },
    //         err => {
    //             console.log(err)
    //         }
    //     )
    // }

    getProfile = async () => {
        let response = await axios.get(`api/user/profile/`, {
            headers: {
                Authorization: 'Bearer' + localStorage.getItem('token')
            }
        });
        console.log(response.data);
    };

    logout() {
        sessionStorage.setItem('userData', '');
        sessionStorage.clear();
        localStorage.clear();
        this.setState({
            redirect: true
        })
    }
    render() {

        if (this.state.redirect) {
            return (<Redirect to={'/login'} />)
        }

        //    if(sessionStorage.getItem("userData")){
        //        return(<Redirect to={'/'}/>)
        //    }

        return (
            <React.Fragment>
                <div>
                    <HomeCarousel />
                    <div class="grid-container">
                        <div className="promo">
                            <div>
                                <img src="https://res.cloudinary.com/fullmoon/image/upload/v1613488203/Thai_milk_tea_cake_jbmuvy.jpg" height="200" width="250" />
                            </div>
                            <div class="promo-text">
                                <h4>Thai Milk Tea Sponge Cake.</h4>
                                <h4> Login to access the free receipt</h4>
                            </div>
                        </div>
                        <div class="promo">

                        </div>
                        <div class="promo">

                        </div>

                    </div>
                    {/* <button onClick={this.logout}>Log Out</button>
                     <button onClick={this.getProfile}>Get User Profile</button> */}
                </div>


            </React.Fragment>

        )
    }// end of render
}



export default Home