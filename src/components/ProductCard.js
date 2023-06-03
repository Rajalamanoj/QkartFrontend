import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,CardActionArea
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {

  return (
     <Card className="card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography  variant="subtitle1" color="textPrimary" component="div">
           {product.name}
          </Typography>
          <Typography variant="subtitle2" color="textprimary">
            ${product.cost}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Rating name="half-rating-read" value={product.rating}  readOnly />
      </CardActions>
       <CardActions className="card-actions">
         <Button className="card-button" variant="contained" onClick={handleAddToCart}>
          <AddShoppingCartOutlined /> ADD TO CART 
        </Button>
      </CardActions>
    
    </Card>
  );
};

export default ProductCard;
