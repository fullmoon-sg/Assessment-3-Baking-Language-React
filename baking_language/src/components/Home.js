import React from 'react';
import { Redirect } from 'react-router-dom'
import HomeCarousel from './Home/HomeCarousel'
import HomeCardDeck from './Home/HomeCardDeck'
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
                    <br/>
                    <div className="popularWeek">   
                    <h2>Most Popular Cakes Ordered of the Week</h2>
                      </div>
                      <br/>
                    <HomeCardDeck />
                    <br></br>
                     <div className="popularWeek">
                    <h2>Log in for Free Thai Milk Tea Receipt and Step-by-Step Instructions</h2>
                      </div>
                      <br/>
                
                    {/* <button onClick={this.getProfile}>Get User Profile</button> */}
                    {/* <button onClick={this.logout}>Log Out</button> */}
                   
                </div>
            </React.Fragment>
        )
    }// end of render
}



export default Home