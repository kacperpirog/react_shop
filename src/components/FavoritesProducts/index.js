import React, { useContext } from "react";
import { Link } from "react-router-dom";
import RootContext from "../../context/context";
import Button from "../atoms/Button";
import { StyledImg } from "../homeContainer/styledHomeContainer";
import { StyledUlFavoritesProduct } from "./StyledFavoritesProduct";

const FavoritesProducts = () => {
  const { product, deleteAddToFavProducts, favProduct } =
    useContext(RootContext);

  return (
    <StyledUlFavoritesProduct>
      {favProduct.map((addFavProduct) => {
        const { name, image, id, price, category, desc, brand } = addFavProduct;
        return (
          <li>
            <Link
              to={`/product/${name.replace(/\s/g, "-")}`}
              state={{ ...product }}
            >
              <StyledImg src={image} alt={name} />
            </Link>
            <h1>{name}</h1>
            <h4>{price}$</h4>
            <h3>{category}</h3>
            <h5>{desc}</h5>
            <h5>{brand}</h5>
            <Button onClick={() => deleteAddToFavProducts(id)}>delete</Button>
          </li>
        );
      })}
    </StyledUlFavoritesProduct>
  );
};
export default FavoritesProducts;
