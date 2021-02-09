
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


export default function Cart(props) {
    const classes = useStyles();

    let item = props.cartItems.map(item => (
        <div key={item.id}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">{item.category}</TableCell>
                        <TableCell align="left" >{item.description}</TableCell>
                        <TableCell align="left">${item.price/100}</TableCell>
                        <TableCell align="left">{item.quantity}</TableCell>
                    </TableRow>
                </TableHead>
            </Table>

        </div>
    ))

    return (
        <React.Fragment>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Category</TableCell>
                            <TableCell align="left">Description</TableCell>
                            <TableCell align="left">Price</TableCell>
                            <TableCell align="left">Quantity</TableCell>
                        </TableRow>
                    </TableHead>

                    {item}
                    <TableRow>
                        <TableCell rowSpan={3} />
                        <TableCell colSpan={2}>Subtotal</TableCell>
                        <TableCell align="right">AA</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>GST</TableCell>
                        <TableCell align="right">7%</TableCell>
                        <TableCell align="right">CC</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>Total</TableCell>
                        <TableCell align="right">DD</TableCell>
                    </TableRow>
                </Table>
            </TableContainer>
        </React.Fragment>
    )
}


