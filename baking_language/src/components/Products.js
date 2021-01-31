import React, {useContext} from 'react';
import { Grid } from "@material-ui/core";
import Product from './Product/Product';
import ProductContext from "../context/ProductContext"

  
export default function Products(){

    const context = useContext(ProductContext)

    const getProductCard = productObj => {
        return(
              <Grid item xs={12} sm={3}> 
            <Product {...productObj}/>
              </Grid> 
        );
    };
   
    return (
       <Grid container spacing = {4}>             
       {context.products.map(productObj => getProductCard(productObj))}
     </Grid>
    )
}