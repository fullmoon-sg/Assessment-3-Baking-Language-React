import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import Products from './components/Products'
import ProductContext from "./context/ProductContext"
import Home from './components/Home'
import Gallery from './components/Gallery'
import AboutUs from './components/AboutUs'
import Feedbacks from './components/Feedbacks'
import Login from './components/Login'
import FeedbackContext from "./context/FeedbackContext"
import SignUp from "./components/SignUp"
import Cart from "./components/Cart"
import Footer from './components/Footer'
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import CloseIcon from '@material-ui/icons/Close';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './components/css/Menu.css';
import "./App.css"


class App extends React.Component {

    state = {
        products: [],
        feedbacks: [],
        cartItems: [],
        token: '',
        toggle: false,
        cartTotal: '0'
    }

    async componentDidMount() {
        let productResponse = await axios.get('products-api');
        await this.setState({
            products: productResponse.data
        })

        let feedbackResponse = await axios.get('feedbacks-api');
        await this.setState({
            feedbacks: feedbackResponse.data
        })

        if (!this.state.token) {
            await this.setState({
                'token': localStorage.getItem('adonisToken')
            })
        }
    }

    menuToggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    setToken = (token) => {
        this.setState({
            token
        })
    }

    removeToken=(token) => {
        this.setState({
            token:""
        })
    }

    addToCart = async (product) => {
        const cartItems = this.state.cartItems.slice();
        let existInCart = false;
        cartItems.forEach(item => {
            if (item.id === product.id) {
                item.quantity++;
                existInCart = true;
            }
        });
        
        if (!existInCart) {
            await this.setState({
                cartItems: [...this.state.cartItems, product],
            })
        }
        let total = this.state.cartItems.reduce((accumulate, currentItem) => accumulate + ((currentItem.price * currentItem.quantity) / 100), 0);
         await this.setState({
             cartTotal : total})

    }

    removeFromCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        this.setState({
            cartItems: cartItems.filter((x) => x.id !== product.id)
        });
    }

    render() {
        const { toggle } = this.state;
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
                                    <CloseIcon fontSize="large" />
                                </li>
                            </ul>
                            <div className="nav-cart">
                                <span>{this.state.cartItems.length}</span>
                                <Link to="/cart">
                                    <ShoppingCartIcon fontSize="large" />
                                </Link>
                            </div>
                        </nav>
                    </header>
                    <Switch>
                        <Route exact path="/">
                            <Home 
                            token={this.state.token}
                            removeToken={this.removeToken}/>
                        </Route>
                        <Route exact path="/gallery">
                            <Gallery />
                        </Route>
                        <Route exact path="/products">
                            <ProductContext.Provider value={this.state}>
                                <Products addToCart={this.addToCart} />
                            </ProductContext.Provider>
                        </Route>
                        <Route exact path="/feedbacks">
                            <FeedbackContext.Provider value={this.state}>
                                <Feedbacks />
                            </FeedbackContext.Provider>
                        </Route>
                        <Route exact path="/aboutUs">
                            <AboutUs  token={this.state.token}/>
                        </Route>
                        <Route exact path="/login">
                            <Login setToken={this.setToken}/>
                        </Route>
                        <Route exact path="/login/signup">
                            <SignUp />
                        </Route>
                        <Route exact path="/cart">
                            <Cart cartItems={this.state.cartItems}
                            cartTotal={this.state.cartTotal}
                                removeFromCart={this.removeFromCart} />
                        </Route>
                    </Switch>
                </Router>
                <Footer />
            </div>
        )
    }
}

export default App;

