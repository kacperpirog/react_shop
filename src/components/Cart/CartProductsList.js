import React, { useContext } from "react";
import RootContext from "../../context/context";
import Button from "../atoms/Button";
import { DivStyledCart, StyledLiCart } from "./StyledCart";

const CartProductsList = () => {
  const {
    cart,
    deleteProduct,
    increaseCartProductQuantity,
    deleteCardProductQuantity,
  } = useContext(RootContext);

  return (
    <ul>
      {cart.map(({ id, name, image, inCartQuantity, price }) => {
        return (
          <StyledLiCart key={id}>
            <DivStyledCart>
              <div>
                <img src={image} alt={name} />
                <h5>{name}</h5>
              </div>
              <div>
                <Button
                  width="50px"
                  height="50px"
                  onClick={() => deleteCardProductQuantity(id)}
                  disabled={inCartQuantity === 1 ? true : false}
                >
                  -
                </Button>
                <h5>{inCartQuantity}</h5>
                <Button
                  width="50px"
                  height="50px"
                  onClick={() => increaseCartProductQuantity(id)}
                >
                  +
                </Button>

                <h5>{(price * inCartQuantity).toFixed(2)}$</h5>
              </div>
              <Button onClick={() => deleteProduct(id)}>delete</Button>
            </DivStyledCart>
          </StyledLiCart>
        );
      })}
    </ul>
  );
};

export default CartProductsList;
