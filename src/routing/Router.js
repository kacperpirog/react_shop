import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navigations/Navbar";
import { routes } from "../utils/routes";
import Contact from "../views/Contact";
import Home from "../views/Home";
import Products from "../views/Products";
import Cart from "../components/Cart";
import SinglePage from "../views/SinglePage";
import FavProducts from "../views/FavProducts";
import LogIn from "../views/LogIn";
import Registration from "../views/Registration";
import RootContext from "../context/context";
import Checkout from "../views/Checkout";

const Router = ({ setDarkTheme }) => {
  const { currentUser } = useContext(RootContext);
  return (
    <BrowserRouter>
      <Navbar />
      <Cart />
      {/* <button onClick={setDarkTheme}>dark theme</button> */}
      <Routes>
        <Route exact path={routes.home} element={<Home />} />
        <Route path={routes.products} element={<Products />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.favProduct} element={<FavProducts />} />
        <Route path={routes.singlePage} element={<SinglePage />} />
        {!currentUser ? (
          <>
            <Route path={routes.logIn} element={<LogIn />} />
          </>
        ) : (
          <>
            <Route path={routes.checkout} element={<Checkout />} />
            <Route path={routes.registration} element={<Registration />} />
          </>
        )}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
