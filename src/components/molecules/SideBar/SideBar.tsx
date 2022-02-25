import * as React from 'react';
import { List, ListItem, ListItemButton, ListItemText, Box } from '@mui/material';
import { makeStyles } from '@material-ui/core';
export type ListProps = {
    listItems?: string[],
    onClick?: () => void,
}
const useStyles = makeStyles({
    box:{
        height: "300px",
        width: "150px"
    }
});

const SideBar: React.FC<ListProps> = ({ listItems }) => {

    const classes= useStyles();
    const renderListItems = listItems?.map((listItem) => {
        return (
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemText primary={listItem} />
                </ListItemButton>
            </ListItem>
        )
    });
    return (
        <Box className={classes.box}>
            <List>
                {renderListItems}
            </List>
        </Box>
    );
}

export default SideBar;