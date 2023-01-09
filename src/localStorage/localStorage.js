export const getCartFromLocalStorage = () => {
  let cartFormLocalStorage;
  if (localStorage.getItem("cart")) {
    cartFormLocalStorage = JSON.parse(localStorage.getItem("cart"));
  } else {
    cartFormLocalStorage = [];
  }

  return cartFormLocalStorage;
};

export const getFavProductFromLocalStorage = () => {
  let favProductsFormLocalStorage;
  if (localStorage.getItem("favProduct")) {
    favProductsFormLocalStorage = JSON.parse(
      localStorage.getItem("favProduct")
    );
  } else {
    favProductsFormLocalStorage = [];
  }

  return favProductsFormLocalStorage;
};
