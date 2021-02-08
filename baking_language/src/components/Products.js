import React, { useContext} from 'react';
import { Grid } from "@material-ui/core";
import Product from './Product/Product';
import ProductContext from "../context/ProductContext"

export default function Products(props) {

 const context = useContext(ProductContext);

    const getProductCard = (productParams,id) => {
        return (
            <Grid item xs={12} sm={4}>
                <Product {...productParams} key={id}
                />
            </Grid>
        );
    };

    return (
        <Grid container spacing={4}>
            {context.products.map((productParams) => getProductCard({...productParams, addToCart:props.addToCart}))}
        </Grid>
    );
}