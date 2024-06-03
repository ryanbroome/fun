import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const DemoForm = () => {
  return (
    <div>
      <h1>Formikform validation of input data</h1>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {};

          if (!values.username) {
            errors.username = "Required";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 6));
            setSubmitting(false);
          }, 400);
        }}>
        {({ isSubmitting }) => (
          <Form>
            <Field
              type="text"
              name="username"
            />
            <ErrorMessage
              name="username"
              component="div"
            />
            <Field
              type="text"
              name="password"
            />
            <ErrorMessage
              name="password"
              component="div"
            />
            <button
              type="submit"
              disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DemoForm;
