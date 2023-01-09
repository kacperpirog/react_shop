import * as React from "react";
import Button from "../atoms/Button";
import Tooltip from "@mui/material/Tooltip";
import {
  StyledImg,
  StyledDiv,
  ButtonFavProduct,
} from "./StyledProductsListItem";
import { useContext } from "react";
import RootContext from "../../context/context";
import { Link } from "react-router-dom";

const ProductsListItem = ({ product }) => {
  const { id, name, image, price } = product;
  const {
    addToCart,
    cart,
    addToFavProducts,
    favProduct,
    deleteAddToFavProducts,
  } = useContext(RootContext);

  let isInCart;
  cart.forEach((el) => {
    if (el.id === id) {
      isInCart = true;
    }
  });

  let isInFavProduct;
  favProduct.forEach((e) => {
    if (e.id === id) {
      isInFavProduct = true;
    }
  });

  return (
    <>
      <StyledDiv>
        <Link
          to={`/product/${name.replace(/\s/g, "-")}`}
          state={{ ...product }}
        >
          <StyledImg src={image} alt={name} />
        </Link>
        <h4>{name}</h4>
        <h5>{price}$</h5>
        <Button onClick={() => addToCart(id)} disabled={isInCart}>
          {isInCart ? "in cart" : "add to cart"}
        </Button>
        <div>
          <ButtonFavProduct>
            {isInFavProduct ? (
              <Tooltip
                title="remove from favorites"
                placement="right"
                arrow
                onClick={() => deleteAddToFavProducts(id)}
              >
                <i style={{ color: "red" }} className="fas fa-heart "></i>
              </Tooltip>
            ) : (
              <Tooltip
                title="add to favorites"
                placement="right"
                arrow
                onClick={() => addToFavProducts(id)}
              >
                <i className="far fa-heart "> </i>
              </Tooltip>
            )}
          </ButtonFavProduct>
        </div>
      </StyledDiv>
    </>
  );
};

export default ProductsListItem;
