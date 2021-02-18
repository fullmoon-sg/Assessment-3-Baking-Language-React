
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Cart.css'


export default function Cart(props) {

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Category</th>
                        <th scope="col-sm-3">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Unit Cost</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {props.cartItems.map(item => (
                    <tbody>
                        <td key={item.id}>{item.category}</td>
                        <td>{item.description}</td>
                        <td>{item.quantity}</td>
                        <td>${item.price / 100}</td>
                        <td>${(item.price / 100) * item.quantity}</td>
                        <button onClick={() => props.removeFromCart(item)} className="btn btn-outline-danger btn-sm"> Remove</button>
                    </tbody>
                ))}
            </table>
            {props.cartItems.length !== 0 && (
                <div className="total">
                    Sub Total : {""}
                {props.cartTotal}
                </div>
               

            )}


        </div>
    )
}


