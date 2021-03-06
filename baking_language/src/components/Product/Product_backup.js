import React,{useState} from 'react';
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


const useStyles = makeStyles({
  card: {
    margin : 50
  },
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Product(props) {
  const classes = useStyles();
  const {category, image_url, description, price} = props;
  const[cart,setCart] = useState(0)

  const addToCart = () => {
      console.log("Button Clicked")
      console.log(description,price)
  }

  return (
    
    <Card className={classes.card}>
        <CardHeader
        avatar={
       <Avatar aria-label="recipe" className={classes.avatar} />    
        }
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={category}
        
      />
       <CardMedia style={{height : "300px"}}
        image= {image_url}
      />
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {description}
        </Typography>
        <Typography variant="h5" component="h2">
         ${price/100}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small" onClick={addToCart}>Buy Now</Button>
         <Button size="small">Offer</Button>
      </CardActions>
    </Card>
  );
}
 