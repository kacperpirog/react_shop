import React from "react";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";
import { StyledDiv } from "./StyledContactForm";
import Button from "../../atoms/Button";

const contactFormValidationSchema = Yup.object().shape({
  name: Yup.string().required(" Enter your name"),
  surname: Yup.string().required("Enter your surname!"),
  subject: Yup.string()
    .required("Enter Your subject !")
    .min(3, "Min 3 char in your subject"),
  message: Yup.string().min(3, "min 3 char in your message"),
  acceptTerms: Yup.bool().oneOf([true], "You must accept terms"),
});

const ContactForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          surname: "",
          subject: "",
          message: "",
          acceptTerms: false,
        }}
        validationSchema={contactFormValidationSchema}
        onSubmit={(values, { resetForm }) => {
          emailjs
            .send(
              process.env.REACT_APP_SERVICE_EMAILJS,
              process.env.REACT_APP_TEMPLATE_EMAILJS,
              values,
              process.env.REACT_APP_USER_EMAILJS
            )
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
          resetForm();
        }}
      >
        {({ values, handleChange }) => (
          <StyledDiv>
            <Form>
              <h1>Contact Form </h1>
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
                name="subject"
                placeholder="Your subject"
                value={values.subject}
                onChange={handleChange}
              />
              <div>
                <ErrorMessage name="subject" />
              </div>
              <input
                type="message"
                name="message"
                placeholder="Your message"
                value={values.message}
                onChange={handleChange}
              />
              <div>
                <ErrorMessage name="message" />
              </div>
              <label htmlFor="acceptTerms">Accept to send</label>
              <input
                className="accespt__Term__Styled"
                type="checkbox"
                name="acceptTerms"
                id="acceptTerms"
                value={values.acceptTerms}
                checked={values.acceptTerms}
                onChange={handleChange}
              />
              <Button type="submit">send</Button>
              <ErrorMessage
                className="accespt__Term__Styled"
                name="acceptTerms"
              />
            </Form>
          </StyledDiv>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
