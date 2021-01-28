import React from 'react'
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends React.Component{

    state = { 
        products : []
    }

    async componentDidMount(){
        let response = await axios.get('https://8080-de3f3226-69d2-47aa-8bc2-2faf1e0a30b5.ws-us03.gitpod.io/products-api');
        this.setState({
            products : response.data
        })
    }
    render(){
        return <div className="App"></div>      
    }

}

export default App;
