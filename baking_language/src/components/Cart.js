
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


export default function Cart(props) {
    const classes = useStyles();

    let item = props.cartItems.map(item => (
        <div key={item.id}>

                <tr>
                    <td>{item.category}</td>
                    <td>{item.description}</td>
                    <td>{item.quantity}</td>
                    <td>${item.price / 100}</td>
                  
                </tr>
          


        </div>
    ))

    return (
        <React.Fragment>
            <table className="table">
                <thead> 
                    <tr>
                        <th scope="col">Category</th>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th> 
                    </tr>
                </thead>
                
            {item}
            
            </table>
        </React.Fragment>
    )
}


