import React from 'react';
import { Redirect } from 'react-router-dom'
import HomeCarousel from './HomeCarousel'
import './css/Home.css'


class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            redirect: false,
        }
        // this.logout = this.logout.bind(this)
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

    // getProfile = async () => {    
    //     let response = await axios.get('api/user/profile', {
    //         headers: {
    //             Authorization: 'Bearer ' + this.props.token
    //         }
    //     });
    //     console.log(response.data)
    // };

    // logout() {
    //     localStorage.clear();
    //     this.props.removeToken(this.props.token);
    //     this.setState({
    //         redirect: true
    //     })
    // }

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
                    <div className="grid-container">
                        <div className="promo">
                            <img className="promo-image" src="https://res.cloudinary.com/fullmoon/image/upload/v1613488203/Thai_milk_tea_cake_jbmuvy.jpg" alt="Promo Pic" height="290" width="460" />
                            <h4 className="promo-h4"><span>Thai Milk Sponge Cake Receipt : <br />
                      Login to view the receipt</span></h4>
                        </div>
                        <div className="promo">

                        </div>
                        <div className="promo">

                        </div>

                    </div>
                    {/* <button onClick={this.getProfile}>Get User Profile</button> */}
                    {/* <button onClick={this.logout}>Log Out</button> */}
                   
                </div>
            </React.Fragment>
        )
    }// end of render
}



export default Home