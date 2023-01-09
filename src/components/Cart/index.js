import { Tooltip } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import RootContext from "../../context/context";
import { routes } from "../../utils/routes";
import Button from "../atoms/Button";
import CartProductsList from "./CartProductsList";
import { CartWrapper } from "./StyledCart";

const Cart = () => {
  const { isCartOpen, cartTotal, toggleCartOpen } = useContext(RootContext);

  return (
    <CartWrapper isCartOpen={isCartOpen}>
      <h5>
        <i
          onClick={toggleCartOpen}
          style={{ margin: "0 0 0 -5px" }}
          className="fas fa-times"
        ></i>
      </h5>
      <h2>Your Cart</h2>
      <CartProductsList />
      <h2>{cartTotal}$</h2>

      <Button>
        <Tooltip title="add to favorites" placement="right" arrow>
          <Link to={routes.checkout}>Checkout</Link>
        </Tooltip>
      </Button>
    </CartWrapper>
  );
};

export default Cart;
