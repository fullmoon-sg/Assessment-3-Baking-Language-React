import React from 'react';
import Images from './Gallery/Images';
import { img_paths } from './Gallery/Image_source';
import FastRewindIcon from '@material-ui/icons/FastRewind';
import FastForwardIcon from '@material-ui/icons/FastForward';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Box from '@material-ui/core/Box';
import { Redirect } from 'react-router-dom'


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
                    <h1>Hello World</h1>
                    <button onClick={this.logout}>Log Out</button>
                </div>
            </React.Fragment>

        )
    }// end of render
}

const colors = [
    'red',
    'yellow',
    'green',
    'white',
    'orange',
    'purple',
    'pink',
    'brown',
    'cyan'
]

const styles = {
    home: {
        position: 'absolute',
        top: "5%",
        left: "50%",
        transform: 'translate(-50%,50%)',
        height: '300px',
        width: '300px',
        backgroundColor: 'green'
    },
    logo: {
        position: 'absolute',
        top: "5px",
        left: "830px"

    },

    left_arrow: {
        position: 'absolute',
        top: "9%",
        left: "37%",
        transform: 'translate(-50%,50%)',
        height: '40px',
        width: '40px',

    },
    right_arrow: {
        position: 'absolute',
        top: "9%",
        left: "64%",
        transform: 'translate(-50%,50%)',
        height: '40px',
        width: '40px',
    },
    left_box: {
        position: 'absolute',
        top: "575px",
        left: "425px",
        display: "inline-block",
        height: '300px',
        width: '500px',

        boxSizing: 'border-box',
    },
    right_box: {
        position: 'absolute',
        top: "80%",
        left: "71%",
        transform: 'translate(-50%,-50%)',
        height: '270px',
        width: '800px',
        // border: '2px solid black',
        boxSizing: 'border-box',
        border: '2px solid black',
    },
    bottom: {
        position: 'absolute',
        top: "97%",
        left: "50%",
        transform: 'translate(-50%,-50%)',
        height: '30px',
        width: '1900px',
        backgroundColor: 'pink'
    }
}

export default Home