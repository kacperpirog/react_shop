import React, { useContext } from "react";
import RootContext from "../../context/context";
import Button from "../atoms/Button";
import FilteredProduct from "../FilteredProduct";
import ProductsListItem from "../ProductsListItem";
import { StyledUlProductList, ProductWrapper } from "./StyledProductList";

const ProductsList = () => {
  const { products, togglefilterOpen, isCartOpen } = useContext(RootContext);

  return (
    <ProductWrapper isCartOpen={isCartOpen}>
      <div style={{ display: "flex" }}>
        <h1>Products</h1>
        <Button onClick={togglefilterOpen}>Filter by </Button>
      </div>
      <FilteredProduct />
      <StyledUlProductList>
        {products.length !== 0 ? (
          <>
            {products.map((product) => {
              return (
                <li key={product.id}>
                  <ProductsListItem product={product} />
                </li>
              );
            })}
          </>
        ) : (
          <h3>Products not found </h3>
        )}
      </StyledUlProductList>
    </ProductWrapper>
  );
};

export default ProductsList;
