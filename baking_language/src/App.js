import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import Products from './components/Products'
import ProductContext from "./context/ProductContext"
import Home from './components/Home'
import Receipt from './components/Receipt'
import AboutUs from './components/AboutUs'
import Feedbacks from './components/Feedbacks'
import MyProfile from './components/MyProfile'
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
        login: false,
        gst: 0,
        cartTotal: 0,
        subTotal: 0,
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

    removeToken = (token) => {
        this.setState({
            token: "",
            login: false
        })
    }

    confirmLogin = () => {
        this.setState({
            login: true
        })
    }

    logout = () => {
        localStorage.clear();
        // this.removeToken(this.state.token);
        this.setState({
            token: "",
            login: false,
            gst: 0,
            cartTotal: 0,
            subTotal: 0,
            redirect: true
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
        let subtotal = this.state.cartItems.reduce((accumulate, currentItem) => accumulate + ((currentItem.price * currentItem.quantity) / 100), 0);
        let gst = 0.07 * subtotal
        let total = gst + subtotal
        await this.setState({
            subTotal: subtotal,
            gst: gst,
            cartTotal: total
        })
    }

    removeFromCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        let newCart = cartItems.filter((x) => x.id !== product.id)
        let newSubTotal = newCart.reduce((accumulate, currentItem) => accumulate + ((currentItem.price * currentItem.quantity) / 100), 0);
        let newGst = newSubTotal * 0.07;
        let newTotal = newSubTotal + newGst
        this.setState({
            subTotal: newSubTotal,
            gst: newGst,
            cartTotal: newTotal,
            cartItems: newCart
        });
    }

    payNow = async () => {
        console.log("Test")
        if (this.state.login === false) {
            alert("Please proceed to login first. Thank you.");
            return <Redirect to={'/login'} />
        }
        
        if (this.state.login === true){
            let cartContent = this.state.cartItems;
            let option = {
                headers: {
                    Authorization: "Bearer " + this.state.token
                }
            };
            await axios.put(
                "api/cart",
                { cart_content: cartContent },
                option
            );
            let escapedToken = encodeURIComponent(this.state.token);
            window.open("https://8080-de3f3226-69d2-47aa-8bc2-2faf1e0a30b5.ws-us03.gitpod.io/" + "api/loginWithToken?token=" + escapedToken);
        }
    };

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
                                {/* <li><Link to="/gallery">Gallery</Link></li> */}
                                {this.state.login === true && (
                                    <li><Link to="/receipt">Free Receipt</Link></li>
                                )}
                                <li><Link to="/products">Products</Link></li>
                                <li><Link to="/feedbacks">Feedbacks</Link></li>
                                <li><Link to="/aboutUs">About Us</Link></li>
                                {this.state.login === true && (
                                    <li><Link to="/profile">My Profile</Link></li>
                                )}
                                {this.state.login === false && (
                                    <li><Link to="/login">Login</Link></li>
                                )}
                                {this.state.login === true && (
                                    <li><Link to="/login" onClick={this.logout}>Logout</Link></li>
                                )}
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
                                removeToken={this.removeToken} />
                        </Route>
                        <Route exact path="/receipt">
                            <Receipt />
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
                            <AboutUs />
                        </Route>
                        <Route exact path="/profile">
                            <MyProfile token={this.state.token} />
                        </Route>
                        <Route exact path="/login">
                            <Login
                                setToken={this.setToken}
                                confirmLogin={this.confirmLogin}
                            />
                        </Route>
                        <Route exact path="/login/signup">
                            <SignUp />
                        </Route>
                        <Route exact path="/cart">
                            <Cart cartItems={this.state.cartItems}
                                subTotal={this.state.subTotal}
                                gst={this.state.gst}
                                cartTotal={this.state.cartTotal}
                                removeFromCart={this.removeFromCart}
                                payNow={this.payNow} />
                        </Route>
                    </Switch>
                </Router>
                <Footer />
            </div>
        )
    }
}

export default App;

