import React from 'react';
import { Grid } from "@material-ui/core";
import Product from './Product/Product';



function Products() {

    return (
         <Grid container spacing={4} >   
                <Grid item xs={12} sm={3}>
                    <Product />
                </Grid>
        </Grid>
    )
}

export default Products
