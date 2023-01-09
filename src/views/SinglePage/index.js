import { Tooltip } from "@mui/material";
import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Button from "../../components/atoms/Button";
// import { StyledImg } from "../../components/ProductsListItem/StyledProductsListItem";
import RootContext from "../../context/context";
import { StyledDiv } from "./StyledSinglepage";

const SinglePage = () => {
  const {
    addToFavProducts,
    favProduct,
    deleteAddToFavProducts,
    addToCart,
    cart,
  } = useContext(RootContext);

  const location = useLocation();
  const { name, image, id, price, category, desc, brand } = location.state;
  console.log(location);

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
        <img src={image} alt={name} />
        <div>
          <h1>{name}</h1>
          <h3>Price: {price} $</h3>
          <h4>category: {category}</h4>

          <h5>desc: {desc}</h5>
          <h5>brand: {brand}</h5>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sunt
          </p>
          <div className="button__buy__and_fav">
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
            <Button onClick={() => addToCart(id)} disabled={isInCart}>
              {isInCart ? "in cart" : "add to cart"}
            </Button>
          </div>
        </div>
      </StyledDiv>
    </>
  );
};

export default SinglePage;
