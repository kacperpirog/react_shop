import React, { useContext } from "react";

import RootContext from "../../context/context";
import Button from "../atoms/Button";

import {
  StyledDiv,
  StyledImgProduct,
  StyledSection,
} from "./styledHomeContainer";

const HomeContainer = () => {
  const { initialProducts, addToCart } = useContext(RootContext);
  console.log();

  return (
    <>
      <div>
        <StyledSection>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          </h1>
          <h1>
            fugit eaque similique distinctio inventore dicta placeat velit.
          </h1>
          <h1> Recusandae praesentium labore nesciunt numquam minus?</h1>
        </StyledSection>
      </div>
      <StyledDiv>
        {initialProducts.map((product, index) => (
          <>
            {index > 2 && (
              <div>
                <StyledImgProduct src={product.image} alt={product.name} />
                <h5>{product.name}</h5>
                <h4>{product.price}</h4>
                <Button onClick={() => addToCart(product.id)}>
                  add to cart
                </Button>
              </div>
            )}
          </>
        ))}
      </StyledDiv>
    </>
  );
};

export default HomeContainer;
