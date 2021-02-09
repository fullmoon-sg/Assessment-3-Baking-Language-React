import React from 'react';
import { Redirect } from 'react-router-dom'
import HomeCarousel from './HomeCarousel'

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            redirect: false,
        }
        this.logout = this.logout.bind(this)
    }

    componentWillMount() {
        if (sessionStorage.getItem("userData")) {
            console.log("Call user feed")
        } else {
            this.setState({
                redirect: false
            })
        }
    }

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
                    <button onClick={this.logout}>Log Out</button>
                </div>

              
            </React.Fragment>

        )
    }// end of render
}

     

export default Home