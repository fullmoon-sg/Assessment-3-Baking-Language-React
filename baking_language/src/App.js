import React from 'react'
// import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom'
import axios from 'axios'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Menu from './components/Menu'
import Products from './components/Products'
import { Grid } from "@material-ui/core";

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
        return <div className="App">
        <Menu />
         <Grid container direction="column">
            <Grid item container>
                <Grid item xs={0} sm={2}/>
                <Grid item xs={12} sm={8}>
                    <Products />
                </Grid>
                <Grid item xs={0} sm={0}/>
            </Grid>
        </Grid>
  
        </div>      
    }

}

export default App;
