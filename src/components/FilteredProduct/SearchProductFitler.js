import React, { useContext } from "react";
import RootContext from "../../context/context";

const SearchProductFitler = () => {
  const { searchByNameInput, handleProductByNameSearch } =
    useContext(RootContext);
  return (
    <>
      <input
        style={{ width: "300px", height: "50px" }}
        type="text"
        placeholder="search by product name"
        value={searchByNameInput}
        onChange={handleProductByNameSearch}
      />
    </>
  );
};

export default SearchProductFitler;
