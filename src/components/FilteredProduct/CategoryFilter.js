import React, { useContext } from "react";
import RootContext from "../../context/context";

const CategoryFilter = () => {
  const { initialProducts, selectedCategory, selectCategoryForFilter } =
    useContext(RootContext);
  const productCategories = [
    "All",
    ...new Set(
      initialProducts.map((product) => {
        return product.category;
      })
    ),
  ];
  return (
    <select
      style={{ width: "300px", height: "50px" }}
      value={selectedCategory}
      onChange={(e) => selectCategoryForFilter(e.target.value)}
    >
      {productCategories.map((category) => (
        <option value={category}>{category}</option>
      ))}
    </select>
  );
};

export default CategoryFilter;
