import * as React from 'react';
import TopBar from '../organisms/TopBar/TopBar';
import SideBar from '../molecules/SideBar/SideBar';
import { Divider, Grid } from '@mui/material';
import { makeStyles } from '@material-ui/core';

export type TemplateProps = {
    listItems?: string[]
}

const useStyles = makeStyles({
    display: {
        display: "flex"
    },
    sidebar: {
        marginTop: "100px"
    }
})

const Template: React.FC<TemplateProps> = ({ listItems }) => {
    const classes = useStyles();
    return (
        <Grid className={classes.display} direction="row">
            <Grid className={classes.sidebar}>
                <SideBar listItems={listItems} />
            </Grid>
            <Grid>
                <Divider orientation="vertical" />
            </Grid>
            <TopBar />

        </Grid>
    );
}

export default Template;