import React, { useContext } from "react";
import RootContext from "../../context/context";
import moment from "moment";
import {
  StyledButtonPaymentMethod,
  StyledCardCheckoutLi,
  StyledDivShoppingInfo,
  StyledWrapperCheckout,
} from "./StyledCheckout";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ordersCollection } from "../../firebase/utils";
import Button from "../atoms/Button";
import discover from "../../assets/shopicons/discover.svg";
import western from "../../assets/shopicons/western.svg";
import visa from "../../assets/shopicons/visa.svg";
import paypal from "../../assets/shopicons/paypal.svg";
import mastercard from "../../assets/shopicons/mastercard.svg";
import ideal from "../../assets/shopicons/ideal.svg";

const Checkout = () => {
  const {
    cart,
    currentUser,
    cartTotal,
    deleteCardProductQuantity,
    deleteProduct,
    increaseCartProductQuantity,
  } = useContext(RootContext);

  const checkoutValidationSchema = Yup.object().shape({
    email: Yup.string().required("Email"),
    name: Yup.string().required("name"),
    surname: Yup.string().required("surname"),
    phoneNamber: Yup.number().required("phoneNamber"),
    address: Yup.string().required("address"),
    city: Yup.string().required("city"),
    postalCode: Yup.number().required("postalCode"),
  });

  return (
    <StyledWrapperCheckout>
      <StyledDivShoppingInfo>
        <h3>Shopping information</h3>

        <Formik
          initialValues={{
            email: currentUser.email,
            name: currentUser.name,
            surname: currentUser.surname,
            phoneNamber: currentUser.phoneNamber,
            address: currentUser.address,
            city: currentUser.city,
            postalCode: currentUser.postalCode,
          }}
          validationSchema={checkoutValidationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(currentUser);
            console.log(values, "values");
            const order = {
              products: [...cart],
              userInfo: {
                ...values,
              },
              total: cartTotal,
              createdAt: moment(new Date()).format("DD/MM/YYYY, HH:mm:ss"),
            };

            ordersCollection.doc().set({
              ...order,
            });

            console.log(order);

            resetForm();
          }}
        >
          {({ values, handleChange }) => (
            <Form>
              {moment(new Date()).format("DD/MM/YYYY, HH:mm:ss")}

              <input
                type="text"
                name="email"
                disabled
                placeholder="Your email"
                value={values.email}
                onChange={handleChange}
              />
              <div>
                <ErrorMessage name="email" />
              </div>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={values.name}
                onChange={handleChange}
              />
              <div>
                <ErrorMessage name="name" />
              </div>
              <input
                type="text"
                name="surname"
                placeholder="Your surname"
                value={values.surname}
                onChange={handleChange}
              />
              <div>
                <ErrorMessage name="surname" />
              </div>
              <input
                type="number"
                name="phoneNamber"
                placeholder="Your phoneNamber"
                value={values.phoneNamber}
                onChange={handleChange}
              />
              <div>
                <ErrorMessage name="phoneNamber" />
              </div>
              <input
                type="text"
                name="address"
                placeholder="Your address"
                value={values.address}
                onChange={handleChange}
              />
              <div>
                <ErrorMessage name="address" />
              </div>
              <input
                type="text"
                name="city"
                placeholder="Your city"
                value={values.city}
                onChange={handleChange}
              />
              <div>
                <ErrorMessage name="city" />
              </div>
              <input
                type="text"
                name="postalCode"
                placeholder="Your postalCode"
                value={values.postalCode}
                onChange={handleChange}
              />
              <div>
                <ErrorMessage name="postalCode" />
              </div>
              <div className="Button__Buy">
                <Button type="submit">buy</Button>
              </div>
            </Form>
          )}
        </Formik>
      </StyledDivShoppingInfo>
      <StyledButtonPaymentMethod>
        <h3>payment method</h3>
        <button>
          <img src={discover} alt="discover" />
        </button>
        <button>
          <img src={western} alt="discover" />
        </button>
        <button>
          <img src={visa} alt="discover" />
        </button>
        <button>
          <img src={paypal} alt="discover" />
        </button>
        <button>
          <img src={mastercard} alt="discover" />
        </button>
        <button>
          <img src={ideal} alt="discover" />
        </button>
      </StyledButtonPaymentMethod>
      <div>
        <h3>Your cart</h3>
        <ul>
          {cart.map(({ id, name, image, price, inCartQuantity }) => {
            return (
              <StyledCardCheckoutLi key={id}>
                <>
                  <div>
                    <img src={image} alt={name} />
                    <h4>{name}</h4>
                    <div>
                      <Button
                        width="50px"
                        height="50px"
                        onClick={() => deleteCardProductQuantity(id)}
                        disabled={inCartQuantity === 1 ? true : false}
                      >
                        -
                      </Button>
                      <h5>{inCartQuantity}</h5>
                      <Button
                        width="50px"
                        height="50px"
                        onClick={() => increaseCartProductQuantity(id)}
                      >
                        +
                      </Button>
                      <div>
                        <h5>{(price * inCartQuantity).toFixed(2)}$</h5>
                      </div>
                      <div>
                        <Button onClick={() => deleteProduct(id)}>
                          delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </>
              </StyledCardCheckoutLi>
            );
          })}
        </ul>
      </div>
    </StyledWrapperCheckout>
  );
};

export default Checkout;
