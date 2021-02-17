
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


export default function Cart(props) {

    // console.log(props.cartItems)
    // let item = props.cartItems.map(item => (
    //     <div key={item.id}>
    //                 <td>{item.category}</td>
    //                 <td>{item.description}</td>
    //                 <td>{item.quantity}</td>
    //                 <td>${item.price / 100}</td>
    //                 <button> Remove from Cart</button>
    //     </div>
    // ))

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Category</th>
                        <th scope="col-sm-3">Description</th>
                        <th scope="col">Quantity</th>
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
                        <button onClick={ () => props.removeFromCart(item)} className="btn btn-outline-danger"> Remove from Cart</button>
                    </tbody>
                ))}
            </table>
            {props.cartItems.length !== 0 && (
            <div>
                Total Cost : {""}
                ${props.cartItems.reduce((accumulate,currentItem) => accumulate + ((currentItem.price * currentItem.quantity)/100), 0)}
            </div>

            )}
           

        </div>
    )
}


