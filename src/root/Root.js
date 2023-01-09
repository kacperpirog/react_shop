import React, { useState, useEffect } from "react";
import RootContext from "../context/context";
import Router from "../routing/Router";
import GlobalStyles from "../globalStyles/GlobalStyles";
import {
  getCartFromLocalStorage,
  getFavProductFromLocalStorage,
} from "../localStorage/localStorage";
import { client } from "../contentful/config";
import { auth } from "../firebase/config";
import { usersCollection } from "../firebase/utils";

const Root = () => {
  const [products, setProducts] = useState([]);
  const [initialProducts, setInitialProducts] = useState([]);
  const [cart, setCart] = useState(getCartFromLocalStorage());
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchByNameInput, setSearchByNameInput] = useState("");

  const [priceFilter, setPriceFilter] = useState([]);

  const [priceRange, setPriceRange] = useState([]);

  const [sortSelect, setSortSelect] = useState("noSorting");

  const [favProduct, setFavProduct] = useState(getFavProductFromLocalStorage());

  const setCurrentUserFn = (user) => {
    setCurrentUser(user);
  };

  useEffect(() => {
    const checkUser = auth.onAuthStateChanged((user) => {
      if (user) {
        const userDoc = usersCollection.doc(user.uid);
        userDoc.get().then((doc) => {
          if (doc.exists) {
            setCurrentUser({ ...doc.data(), id: user.uid });
          }
        });
      } else {
        setCurrentUser(null);
      }
    });

    return checkUser;
  }, []);

  const handleSortSelect = (e) => {
    setSortSelect(e.target.value);
  };

  const getContentfulProducts = () => {
    client
      .getEntries({ content_type: "product" })
      .then((res) => {
        console.log(res.items, "RES");
        setContentfulProductsData(res.items);
      })
      .catch((err) => console.log(err));
  };

  const setContentfulProductsData = (contentfulData) => {
    const formatedProductsData = contentfulData.map((item) => {
      const formatedItem = {
        id: item.sys.id,
        ...item.fields,
        image: item.fields.image.fields.file.url,
      };

      return formatedItem;
    });

    console.log(formatedProductsData, "TUTAJ");

    setInitialProducts([...formatedProductsData]);
    setProducts([...formatedProductsData]);

    const productsPrices = formatedProductsData.map((product) => product.price);

    const minPrice = Math.min(...productsPrices);
    const maxPrice = Math.max(...productsPrices);

    setPriceRange([minPrice, maxPrice]);
    setPriceFilter([minPrice, maxPrice]);
  };

  useEffect(() => {
    getContentfulProducts();
    // eslint-disable-next-line
  }, []);

  const addToFavProducts = (productId) => {
    const selectedProduct = products.find(
      (product) => product.id === productId
    );
    setFavProduct([...new Set([...favProduct, selectedProduct])]);
  };

  const deleteAddToFavProducts = (deleteId) => {
    const filteredProduts = favProduct.filter(
      (product) => product.id !== deleteId
    );
    setFavProduct([...filteredProduts]);
  };

  useEffect(() => {
    localStorage.setItem("favProduct", JSON.stringify(favProduct));
  }, [favProduct]);

  const handlePriceRangeChange = (value) => {
    const valueInNumberType = value.map((item) => parseFloat(item));
    setPriceFilter(valueInNumberType);
  };

  const handleProductByNameSearch = (e) => {
    setSearchByNameInput(e.target.value);
  };

  const resetFilters = () => {
    setSelectedCategory("All");
    setSearchByNameInput("");
    const priceRangeWithoutStrings = priceRange.map((item) => parseFloat(item));

    setPriceFilter([...priceRangeWithoutStrings]);
  };

  const filterProducts = () => {
    let tempProducts = [...initialProducts];

    if (searchByNameInput.length !== 0) {
      tempProducts = tempProducts.filter(
        (product) =>
          product.name.toLowerCase().slice(0, searchByNameInput.length) ===
          searchByNameInput.toLowerCase()
      );
    }

    if (selectedCategory !== "All") {
      tempProducts = tempProducts.filter(
        (product) => product.category === selectedCategory
      );
    }
    tempProducts = tempProducts.filter(
      (product) =>
        product.price >= priceFilter[0] && product.price <= priceFilter[1]
    );

    if (sortSelect !== "noSorting") {
      const tempInitialProducts = [...tempProducts];
      const productsAToZ = tempInitialProducts.sort((x, y) => {
        return x.name === y.name ? 0 : x.name > y.name ? 1 : -1;
      });
      if (sortSelect === "FromAToZ") {
        tempProducts = productsAToZ;
      } else if (sortSelect === "FromZToA") {
        tempProducts = [...productsAToZ].reverse();
      } else if (sortSelect === "FromTheCheapest") {
        tempProducts = [...productsAToZ].sort(
          (x, y) => parseFloat(x.price) - parseFloat(y.price)
        );
      } else if (sortSelect === "FromTheMostExpensive") {
        tempProducts = [...productsAToZ].sort(
          (x, y) => parseFloat(y.price) - parseFloat(x.price)
        );
      }
    }

    setProducts([...tempProducts]);
  };

  useEffect(() => {
    filterProducts();
    // eslint-disable-next-line
  }, [searchByNameInput, selectedCategory, priceFilter, sortSelect]);

  const selectCategoryForFilter = (category) => {
    setSelectedCategory(category);
  };

  const toggleCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };
  const togglefilterOpen = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const openFilter = () => {
    setIsFilterOpen(true);
  };

  const closeFilter = () => {
    setIsFilterOpen(false);
  };

  const addToCart = (productId) => {
    let isProductAlreadyInCart;

    cart.forEach((el) => {
      if (el.id === productId) {
        isProductAlreadyInCart = true;
      }
    });

    const selectedProduct = products.find(
      (product) => product.id === productId
    );

    if (isProductAlreadyInCart) {
      setCart([...cart]);
    } else {
      setCart([...cart, selectedProduct]);
    }
  };

  const deleteProduct = (id) => {
    const filteredProduct = cart.filter((item) => item.id !== id);
    setCart([...filteredProduct]);
  };

  const calculateTotal = () => {
    let totalCart = 0;
    cart.forEach((item) => {
      totalCart = item.price * item.inCartQuantity + totalCart;
    });

    setCartTotal(totalCart.toFixed(2));
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    calculateTotal();
    // eslint-disable-next-line
  }, [cart]);

  const increaseCartProductQuantity = (productId) => {
    const mappedCart = cart.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          inCartQuantity: item.inCartQuantity + 1,
        };
      } else {
        return item;
      }
    });

    setCart([...mappedCart]);
  };

  const deleteCardProductQuantity = (productId) => {
    const mappedCartProduct = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, inCartQuantity: item.inCartQuantity - 1 };
      } else {
        return item;
      }
    });
    setCart([...mappedCartProduct]);
  };

  return (
    <RootContext.Provider
      value={{
        products,
        initialProducts,
        cart,
        isCartOpen,
        cartTotal,
        isFilterOpen,
        searchByNameInput,
        priceRange,
        priceFilter,
        selectedCategory,
        sortSelect,
        favProduct,
        currentUser,
        deleteAddToFavProducts,
        addToFavProducts,
        openCart,
        closeCart,
        toggleCartOpen,
        addToCart,
        deleteProduct,
        calculateTotal,
        selectCategoryForFilter,
        togglefilterOpen,
        openFilter,
        closeFilter,
        handleProductByNameSearch,
        handlePriceRangeChange,
        resetFilters,
        handleSortSelect,
        increaseCartProductQuantity,
        deleteCardProductQuantity,
        setCurrentUserFn,
      }}
    >
      <GlobalStyles />
      {/* <ThemeProvider theme={currentTheme === "main" ? mainTheme : darkTheme}> */}
      <Router />
      {/* setDarkTheme={setDarkTheme} */}
      {/* </ThemeProvider> */}
    </RootContext.Provider>
  );
};

export default Root;
