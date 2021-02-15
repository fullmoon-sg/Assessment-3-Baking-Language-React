
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


export default function Cart(props) {
 
    console.log(props.cartItems)
    let item = props.cartItems.map(item => (
        <div key={item.id}>
            <tr>   
                    <td>{item.category}</td>
                    <td>{item.description}</td>
                    <td>{item.quantity}</td>
                    <td>${item.price / 100}</td>
                    <button> Remove from Cart</button>
             </tr>   
        </div>
    ))

    return (
        <React.Fragment>
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
            
            {item}
            
            </table>
        </React.Fragment>
    )
}


