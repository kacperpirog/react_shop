import React, { useContext } from "react";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";
import RootContext from "../../../context/context";
import { usersCollection } from "../../../firebase/utils";
import { useNavigate } from "react-router-dom";
import { StyledDivFromLogin } from "./StyledRegistrationForm";
import Button from "../../atoms/Button/index";

const registrationValidationSchema = Yup.object().shape({
  name: Yup.string().required("name"),
  surname: Yup.string().required("Enter your surname!"),
  phoneNamber: Yup.number().required("phoneNamber"),
  address: Yup.string().required("address"),
  city: Yup.string().required("city"),
  postalCode: Yup.number().required("postalCode"),
  // acceptTerms: Yup.bool().oneOf([true], "You must accept terms"),
});

const RegistrationForm = () => {
  const { currentUser } = useContext(RootContext);

  const navigate = useNavigate();
  return (
    <StyledDivFromLogin>
      <Formik
        initialValues={{
          email: currentUser?.email,
          name: "",
          lastname: "",
          address: "",
          phoneNamber: "",
          city: "",
          postalCode: "",
        }}
        validationSchema={registrationValidationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(currentUser, "here");
          console.log(values, "here");
          usersCollection
            .doc(currentUser.id)
            .set({
              ...currentUser,
              email: values.email,
              name: values.name,
              lastname: values.lastname,
              address: values.address,
              phoneNamber: values.phoneNamber,
              city: values.city,
              postalCode: values.postalCode,
            })
            .then(() => navigate("/"));

          resetForm();
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <h1>Registration</h1>
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

            <Button type="submit">send</Button>
          </Form>
        )}
      </Formik>
    </StyledDivFromLogin>
  );
};

export default RegistrationForm;
