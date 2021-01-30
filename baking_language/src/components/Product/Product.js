import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ShareIcon from '@material-ui/icons/Share';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ProductContext from "../../context/ProductContext"


const useStyles = makeStyles({
  
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Product() {
  const classes = useStyles();
 
  const context = useContext(ProductContext);

  return (
    context.products.map(p =>(
    <Card>
        <CardHeader
        avatar={
       <Avatar aria-label="recipe" className={classes.avatar} />    
        }
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        category={p.category}
        
      />
       <CardMedia style={{height : "200px"}}
        image={p.image_url}
      />
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {p.description}
        </Typography>
        <Typography variant="h5" component="h2">
         {p.price/100}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">Buy Now</Button>
         <Button size="small">Offer</Button>
      </CardActions>
    </Card>
    ))
  );
}
