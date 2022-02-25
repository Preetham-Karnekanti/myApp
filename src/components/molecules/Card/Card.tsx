import * as React from 'react';
import { Card as MuiCard, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import Icon from '../../atoms/Icon/Icon'
import { ICON_PATHS } from '../../atoms/Icon/IconsConstants'
import TextField from '../../atoms/TextField/TextField'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  display:{
    display: "flex"
  },
  padding:{
    paddingRight: "5px",
    paddingBottom: "3px"
  },
  textField:{
    width: "150px"
  }
});

export type ObjectType = {
  image?: string,
  price?: number,
  quantity?: number
}

export type CardProps = {
  object?: ObjectType,
  onClick?: () => void,
  onChange?: ()=> void
} 

const Card: React.FC<CardProps> = ({ object, onClick, onChange }) => {
  const classes = useStyles();
  return (
    <MuiCard sx={{ maxWidth: 345 }} onClick={onClick} >
      <CardMedia
        className={classes.media}
        image={object?.image}
      />
      <CardContent>
        <Grid container justifyContent="space-between">
          <Grid>
            <Grid className={classes.display}>
              <Typography className={classes.padding}> Price:</Typography>
              <Typography>{object?.price}</Typography>
            </Grid>
            <Grid>
              <TextField className={classes.textField} label="Quantity" type="number" onChange={onChange} ></TextField>
            </Grid>
          </Grid>
          <Grid>
            <Icon path={ICON_PATHS.ADD_TO_CART} viewBox="0 0 576 512" />
          </Grid>
        </Grid>
      </CardContent>
    </MuiCard >
  );
}

export default Card;