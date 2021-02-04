import React, { useContext} from 'react';
import { Grid } from "@material-ui/core";
import Product from './Product/Product';
import ProductContext from "../context/ProductContext"


// function renderProducts(products, addTocart){
//     let jsx = []
//     for (let p of products){
//         jsx.push( 
//             <Product category = {p.category}
//             description = {this.description}
//             image = {p.image_url}
//             price = {p.price}
//             addTocart = {addTocart}
//             />
//         )
//     }
//     return jsx
// }


export default function Products(props) {

 const context = useContext(ProductContext);
 console.log(context)
    const getProductCard = (productParams) => {
        return (
            <Grid item xs={12} sm={4}>
                <Product {...productParams}    
                />
            </Grid>
        );
    };

    return (
        <Grid container spacing={4}>
            {context.products.map(productParams => getProductCard({...productParams,addToCart:props.addToCart}))}
        </Grid>
    );

// return <React.Fragment>
//     {renderProducts(props.products,props.addTocart)}
// </React.Fragment>


}