 import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
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
import "./App.css"
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import CloseIcon from '@material-ui/icons/Close';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './components/css/Menu.css'


class App extends React.Component {

    state = {
        products: [],
        feedbacks: [],
        cartItems: [],
        quantity:'',
        toggle : false
      

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

    menuToggle = () => {
        this.setState({
            toggle : !this.state.toggle
        })
    }
 
    addToCart = (product) => {
        this.setState({
            cartItems: [...this.state.cartItems, product]
        })
    }

    render() {

        const {toggle} = this.state

        return (
            <div className="app">
                <Router>
                    <header>
                        <div className="menu" onClick={this.menuToggle}>
                   <FormatAlignJustifyIcon fontSize="large" />
                   </div>
                   <div className="logo">
                       <h4><Link to="/">Baking Language</Link></h4> 
                   </div>
                   <nav>
                       <ul className={toggle ? "toggle" : ""}>
                          <li><Link to="/">Home</Link></li>
                           <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/products">Products</Link></li>
                             <li><Link to="/feedbacks">Feedbacks</Link></li>
                              <li><Link to="/aboutUs">About Us</Link></li>
                               <li><Link to="/login">Login</Link></li>
                               <li className="close" onClick={this.menuToggle}>
                                   <CloseIcon fontSize="large"/>
                                   </li>
                       </ul>
                       <div className="nav-cart">
                           <span>0</span> 
                           <Link to="/cart">
                           <ShoppingCartIcon fontSize="large"/>
                           </Link>
                       </div>
                   </nav>
                      </header>
                      <Switch>
                          <Route exact path = "/">
                              <Home />
                          </Route>
                          <Route exact path = "/gallery">
                              <Gallery />
                          </Route>
                          <Route exact path = "/products">
                          <ProductContext.Provider value={this.state}>
                              <Products addToCart={this.addToCart}/>
                              </ProductContext.Provider>
                          </Route>
                          <Route exact path = "/feedbacks">
                              <FeedbackContext.Provider value={this.state}>
                              <Feedbacks />
                              </FeedbackContext.Provider>
                          </Route>
                          <Route exact path = "/aboutUs">
                              <AboutUs />
                          </Route>
                           <Route exact path = "/login">
                              <Login />
                          </Route>
                           <Route exact path = "/login/signup">
                              <SignUp />
                          </Route>
                           <Route exact path = "/aboutUs">
                             {this.state.cartItems.length > 0 ?
                              <Cart cartItems={this.state.cartItems} /> : console.log("Your cart is empty")}
                          </Route>
                        
                      </Switch>
                  
                </Router>

          </div>
        )
    }

}

export default App;

