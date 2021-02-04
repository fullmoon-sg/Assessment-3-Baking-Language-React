import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Menu from './components/Menu'
import Products from './components/Products'
import { Grid } from "@material-ui/core";
import ProductContext from "./context/ProductContext"
import Home from './components/Home'
import Gallery from './components/Gallery'
import AboutUs from './components/AboutUs'
import Feedbacks from './components/Feedbacks'
import Login from './components/Login'
import FeedbackContext from "./context/FeedbackContext"
import SignUp from "./components/SignUp"
import Cart from "./components/Cart"

class App extends React.Component {

    state = {
        products: [],
        feedbacks: [],
        cartItems: []
    }

    async componentDidMount() {
        let productResponse = await axios.get('https://8080-de3f3226-69d2-47aa-8bc2-2faf1e0a30b5.ws-us03.gitpod.io/products-api');
        this.setState({
            products: productResponse.data
        })

        let feedbackResponse = await axios.get('https://8080-de3f3226-69d2-47aa-8bc2-2faf1e0a30b5.ws-us03.gitpod.io/feedbacks-api');
        this.setState({
            feedbacks: feedbackResponse.data
        })
    }

    addToCart = (product) => {
        this.setState({
            cartItems: [...this.state.cartItems, product]
        })
    }

    render() {
        return (

           
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Menu />
                            <Home />
                        </Route>
                        <Route exact path="/gallery">
                            <Menu />
                            <Gallery />
                        </Route>
                        <Route exact path="/products">

                            <Menu />
                            <Grid container direction="column">
                                <Grid item container>
                                    <Grid item xs={0} sm={2} />
                                    <Grid item xs={12} sm={8}>
                                         <ProductContext.Provider value={this.state}>   
                                        <Products addToCart={this.addToCart}/>
                                        </ProductContext.Provider>
                                    </Grid>
                                    <Grid item xs={0} sm={2} />
                                </Grid>
                            </Grid>

                        </Route>
                        <Route exact path="/feedbacks">
                            <FeedbackContext.Provider value={this.state}>
                                <Menu />
                                <Grid container direction="column">
                                    <Grid item container>
                                        <Grid item xs={0} sm={2} />
                                        <Grid item xs={12} sm={8}>
                                            <Feedbacks />
                                        </Grid>
                                        <Grid item xs={0} sm={2} />
                                    </Grid>
                                </Grid>
                            </FeedbackContext.Provider>
                        </Route>
                        <Route exact path="/aboutus">
                            <Menu />
                            <AboutUs />
                        </Route>
                        <Route exact path="/login">
                            <Menu />
                            <Grid container direction="column">
                                <Grid item container>
                                    <Grid item xs={0} sm={2} />
                                    <Grid item xs={12} sm={8}>
                                        <Login />
                                    </Grid>
                                    <Grid item xs={0} sm={2} />
                                </Grid>
                            </Grid>
                        </Route>
                        <Route exact path="/login/signup">
                            <Menu />
                            <Grid container direction="column">
                                <Grid item container>
                                    <Grid item xs={0} sm={2} />
                                    <Grid item xs={12} sm={8}>
                                        <SignUp />
                                    </Grid>
                                    <Grid item xs={0} sm={2} />
                                </Grid>
                            </Grid>
                        </Route>
                        <Route exact path="/cart">
                            <Menu />
                            <Grid container direction="column">
                                <Grid item container>
                                    <Grid item xs={0} sm={2} />
                                    <Grid item xs={12} sm={8}>
                                        <Cart cartItems={this.state.cartItems} />
                                    </Grid>
                                    <Grid item xs={0} sm={2} />
                                </Grid>
                            </Grid>
                        </Route>

                    </Switch>
                </Router>


          
        )



    }

}
export default App;

