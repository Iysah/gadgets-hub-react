import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import stripHtml from 'string-strip-html';

import useStyles from './productStyles';


const Product = ({ product }) => {
    const classes = useStyles();
    const { description } = stripHtml(product?.description);

    console.log(product);

  return (
    <Card className={classes.root}>
        <CardMedia className={classes.media} image={product?.media.source} title={product?.name}/>
        <CardContent>
            <div className={classes.cardContent}>
                <Typography variant='h5' gutterBottom>
                    {product?.name}
                </Typography>
                <Typography variant='h5'>
                    {product?.price.formatted_with_symbol}
                </Typography>
            </div>
            <Typography variant='body2' color='textSecondary'>{description}</Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
            <IconButton aria-label ='Add to Cart'>
                <AddShoppingCart />
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default Product