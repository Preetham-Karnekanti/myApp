import * as React from 'react';
import Logo from '../../molecules/Logo/Logo';
import Header from '../Header/Header';
import { Grid } from '@mui/material';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    padding: {
        marginTop: "20px",
        paddingLeft: "250px"
    },
});

export type TopBarProps = {
    
}

const TopBar: React.FC<TopBarProps> = () => {
    const classes = useStyles();
    return (
        <Grid container direction="row">
            <Grid item>
                <Logo />
            </Grid>
            <Grid item className={classes.padding}>
                <Header />
            </Grid>

        </Grid>
    );
}

export default TopBar;