import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";
import Button from "../atoms/Button/index";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Navigate } from "react-router-dom";
import { routes } from "../../utils/routes";
import { StyledDivFromLogin } from "./StyledLogInLogInRegistration";
import { auth } from "../../firebase/config";
import { usersCollection } from "../../firebase/utils";

const style = {
  position: "absolute",
  display: "flex",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const registrationFormValidationSchema = Yup.object().shape({
  email: Yup.string().required("Enter Your mail !").email("Invalid email!"),
  password: Yup.string()
    .required("Enter Your password !")
    .min(3, "Min 3 char in your password")
    .max(20, "password too long"),
  acceptTerms: Yup.bool().oneOf([true], "You must accept terms"),
});

const loginFormValidationSchema = Yup.object().shape({
  email: Yup.string().required("Enter Your mail !").email("Invalid email!"),
  password: Yup.string()
    .required("Enter Your password !")
    .min(3, "Min 3 char in your password")
    .max(20, "password too long"),
});

const LogInRegistration = () => {
  const [open, setOpen] = useState(false);
  const [hasRedirect, setHasRedirect] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // eslint-disable-next-line

  return (
    <StyledDivFromLogin>
      <Formik
        initialValues={{
          email: "",
          password: "",
          acceptTerms: false,
        }}
        validationSchema={registrationFormValidationSchema}
        onSubmit={(values, { resetForm }) => {
          auth
            .createUserWithEmailAndPassword(values.email, values.password)
            .then((res) => {
              console.log(res);
              usersCollection
                .doc(res.user.uid)
                .set({
                  email: values.email,
                  password: values.password,
                  acceptTerms: values.acceptTerms,
                })

                .catch((err) => console.log(err));
              console.log(usersCollection);
            })
            .then(() => {
              setHasRedirect(true);
            })
            .catch((err) => console.log(err));

          resetForm();
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <>
              <h1>Registration</h1>
              <input
                type="text"
                name="email"
                placeholder="Your e-mail"
                value={values.email}
                onChange={handleChange}
              />
              <div>
                <ErrorMessage name="email" />
              </div>

              <input
                type="text"
                name="password"
                placeholder="Your password"
                value={values.password}
                onChange={handleChange}
              />
              <ErrorMessage name="password" />
              <div>
                <label htmlFor="acceptTerms">Accept to send</label>
                <input
                  type="checkbox"
                  name="acceptTerms"
                  id="acceptTerms"
                  value={values.acceptTerms}
                  checked={values.acceptTerms}
                  onChange={handleChange}
                  className="accespt__Term__Styled__Registration"
                />

                <ErrorMessage name="acceptTerms" />
              </div>
              <Button type="submit">send</Button>
            </>
            <div className="button__Submit__Styled__Login">
              <h1>Login</h1>
              <Button onClick={handleOpen}>Login</Button>
            </div>
          </Form>
        )}
      </Formik>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={loginFormValidationSchema}
            onSubmit={(values, { resetForm }) => {
              auth
                .signInWithEmailAndPassword(values.email, values.password)
                .then((res) => {
                  console.log(res);
                  handleClose();
                  setIsLogged(true);
                })
                .catch((err) => console.log(err));
              resetForm();
            }}
          >
            {({ values, handleChange }) => (
              <Form>
                <h1>Login</h1>
                <input
                  type="text"
                  name="email"
                  placeholder="Your e-mail"
                  value={values.email}
                  onChange={handleChange}
                />
                <div>
                  <ErrorMessage name="email" />
                </div>

                <input
                  type="text"
                  name="password"
                  placeholder="Your password"
                  value={values.password}
                  onChange={handleChange}
                />
                <div>
                  <ErrorMessage name="password" />

                  <Button
                    className="button__Submit__Styled__Login"
                    type="submit"
                  >
                    Login
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
      {hasRedirect && <Navigate to={routes.registration} />}
      {isLogged && <Navigate to={routes.products} />}
    </StyledDivFromLogin>
  );
};

export default LogInRegistration;
