import React from 'react'
import { Grid } from '@mui/material'

import Product from './Product/Product'
import useStyles from './productsStyles';

const products = [
    { id: 1, name: 'Mouse', description: 'Smaat mouse', price: '$5', image: 'https://cdn.shopify.com/s/files/1/0624/4371/6827/products/SM220-R1_360x.jpg?v=1642370569' },
    { id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$250', image: 'https://m.media-amazon.com/images/I/61F99gFWolL._AC_SS450_.jpg' },
]

const Products = () => {
    const classes = useStyles()

  return (
    <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justifyContent='center' spacing={4}>
            {
                products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))
            }
        </Grid>
    </main>
  )
}

export default Products;