import React, { useContext } from "react";
import RootContext from "../../context/context";
import Button from "../atoms/Button";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import SearchProductFitler from "./SearchProductFitler";
import SortProduct from "./SortProduct";
import { StyledDiv } from "./StyledFilteredProduct";

const FilteredProduct = () => {
  const { togglefilterOpen, isFilterOpen, resetFilters } =
    useContext(RootContext);
  return (
    <>
      <div>
        <StyledDiv isFilterOpen={isFilterOpen}>
          <SearchProductFitler />
          <CategoryFilter />
          <PriceFilter />

          <Button
            width="50px"
            bgColor="white"
            onClick={() => {
              togglefilterOpen();
              resetFilters();
            }}
          >
            X
          </Button>
        </StyledDiv>
        <SortProduct />
      </div>
    </>
  );
};

export default FilteredProduct;
