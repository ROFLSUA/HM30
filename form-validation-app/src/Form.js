import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Ім\'я обов\'язкове'),
  email: Yup.string().email('Введіть коректну пошту').required('Пошта обов\'язкова'),
  phone: Yup.string().matches(/^\d{12}$/, 'Телефон повинен мати 12 цифр').required('Телефон обов\'язковий'),
});

const FormComponent = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', phone: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">Ім'я</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="email">Електронна пошта</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="phone">Телефон</label>
          <Field type="text" id="phone" name="phone" />
          <ErrorMessage name="phone" component="div" className="error" />
        </div>

        <button type="submit">Надіслати</button>
      </Form>
    </Formik>
  );
};

export default FormComponent;
