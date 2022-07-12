import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

import Logo from '../../assets/commerce.png';
import useStyles from './navbarStyles';

const Navbar = () => {
    const classes = useStyles();

  return (
    <>
        <AppBar position='fixed' className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography variant='h6' className={classes.title} color='inherit'>
                    <img src={ Logo } alt='Gadgets Hub' height='25px' className={classes.image}/>
                    Gadgets Hub
                </Typography>
                <div className="classes.grow"></div>
                <div className="classes.button">
                    <IconButton arial-label='Show cart items' color='inherit'>
                        <Badge badgeContent={2} color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar