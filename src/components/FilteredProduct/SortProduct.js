import React from "react";
import { useContext } from "react";
import RootContext from "../../context/context";
import { StyleSelect } from "./StyledFilteredProduct";

const SortProduct = () => {
  const { sortSelect, handleSortSelect } = useContext(RootContext);
  return (
    <>
      <lebel key={sortSelect.id} htmlFor="sortProductsSelect">
        Sort products
      </lebel>
      <StyleSelect
        name="sortProductsSelect"
        id="sortProductsSelect"
        value={sortSelect}
        onChange={handleSortSelect}
      >
        <option value={"noSorting"}>no sorting</option>
        <option value={"FromTheCheapest"}>The Cheapest</option>
        <option value={"FromTheMostExpensive"}> The Most Expensive</option>
        <option value={"FromAToZ"}> A to Z</option>
        <option value={"FromZToA"}> Z to A</option>
      </StyleSelect>
    </>
  );
};

export default SortProduct;
