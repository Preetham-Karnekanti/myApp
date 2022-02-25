import * as React from 'react';
import Button from '../../atoms/Button/Button';
import Avatar from '../../atoms/Avatar/Avatar';
import Icon from '../../atoms/Icon/Icon';
import { ICON_PATHS } from '../../atoms/Icon/IconsConstants';
import { Grid } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { Menu, MenuItem } from '@mui/material';


const useStyles = makeStyles({
    display: {
        display: "flex"
    },
});

export type HeaderProps = {

}

const Header: React.FC<HeaderProps> = () => {
    const [isLoggedin, setIsLoggedin] = React.useState<boolean>(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const classes = useStyles();

    const handleClickLogin = () => {
        setIsLoggedin(!isLoggedin);
    };

    const handlePopover = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setIsLoggedin(!isLoggedin);
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            {!isLoggedin && <Button label="Login" onClick={handleClickLogin} variant="contained"> </Button>}
            {isLoggedin &&
                <Grid className={classes.display}>
                    <Avatar label="P" onClick={(event) => handlePopover(event)} ></Avatar>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                    <Icon path={ICON_PATHS.ADD_TO_CART} viewBox="0 0 576 512" />
                </Grid>
            }
        </React.Fragment>


    );
}

export default Header;