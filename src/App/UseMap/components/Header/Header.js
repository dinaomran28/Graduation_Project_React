import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';

import useStyles from './styles';

const Header = () => {

    const classes = useStyles();

    return (
        <AppBar position='static' style={{ background: '#fafafa', boxShadow: 'inset' }}>
            <Toolbar className={classes.toolbar}>
                <Typography variant='h5' className={classes.title} style={{ alignItems: 'center' }}>
                    E-Guide
                </Typography>
                <Box display='flex'>
                    <img src={require('../../../../teelYellowNoTxt.png')} height={70} width={90} alt="" />
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
