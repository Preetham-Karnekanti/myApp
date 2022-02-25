import * as React from 'react';
import { Typography, Grid } from '@mui/material';
import { makeStyles } from '@material-ui/core';

export type LogoProps = {

}
const useStyles = makeStyles({
    margin: {
        marginTop: "12px",
        marginLeft: "300px"
    }
});

const Logo: React.FC<LogoProps> = () => {
    const classes = useStyles();
    return (
        <Grid container direction="row">
            <Grid item>
                <img
                    src="https://i.pinimg.com/originals/cb/92/f2/cb92f275d0910e502bfbffdba4bddfd1.jpg"
                    height="75"
                    width="100"
                    alt="logo"
                />
            </Grid>
            <Grid item className={classes.margin}>
                <Typography variant="h3">My App</Typography>
            </Grid>
        </Grid>

    );
}

export default Logo;