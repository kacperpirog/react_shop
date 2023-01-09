import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import RootContext from "../../../context/context";
import { auth } from "../../../firebase/config";
import { routes } from "../../../utils/routes";
import {
  StyledLink,
  StyledNav,
  StyledTopNav,
  StyledTopInfo,
  StyledSpan,
  StyledI,
} from "../Navbar/StyledNavbar";

const Navbar = () => {
  const { toggleCartOpen, cart, currentUser } = useContext(RootContext);

  return (
    <>
      <StyledTopInfo>
        <h5>
          <i className="fas fa-truck"></i> Free delivery from € 50{" "}
        </h5>
        <h5>
          <i className="fas fa-globe-europe"></i> 100% climate-neutral
        </h5>
        <h5>
          <i className="fas fa-undo-alt"> </i>100 days returns policy
        </h5>
      </StyledTopInfo>
      <StyledTopNav>
        <p>
          DELIVERY BEFORE THE BIG DAY – Information on the latest possible order
          dates – more info »
        </p>
      </StyledTopNav>
      <StyledNav>
        <ul>
          <li>
            <StyledLink to={routes.home}>Home</StyledLink>
          </li>
          <li>
            <StyledLink to={routes.products}>Products</StyledLink>
          </li>
          <li>
            <StyledLink to={routes.contact}>Contact</StyledLink>
          </li>
          <li>
            {currentUser ? (
              <button onClick={() => auth.signOut()}>Log out</button>
            ) : (
              <StyledLink to={routes.logIn}>
                <span>Log in</span>
              </StyledLink>
            )}
          </li>
          <li>
            <Link to={routes.favProduct}>
              <StyledI className="fas fa-heart"></StyledI>
            </Link>
          </li>
          <li>
            <button className="cart-btn" onClick={toggleCartOpen}>
              <StyledSpan>{cart.length}</StyledSpan>
            </button>
          </li>
        </ul>
      </StyledNav>
    </>
  );
};

export default Navbar;
