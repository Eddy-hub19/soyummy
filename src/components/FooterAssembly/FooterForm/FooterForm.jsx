import * as React from 'react';
import { useMediaRules } from 'hooks/MediaRules';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import { getColor } from 'utils/formikColors';
import sprite from '../../../images/sprite.svg';
import { HiOutlineMail } from 'react-icons/hi';
import { useFormik } from 'formik';

import {
  FooterWrap,
  FooterWrapText,
  FooterWrapInput,
  InputFlag,
  FooterWrapBtn,
} from './FooterForm.styled';
import { axiosInstance } from 'service/API/axios';

export const FooterForm = () => {
  const { isDesktop } = useMediaRules();
  const [email, setEmail] = React.useState('');

  const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: value => {
      console.log('onSubmit', value);
      axiosInstance.post('/auth/subscribe', value);
    },
  });

  return (
    <div>
      <h1>Subscribe</h1>
      <FooterWrap onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          onChange={formik.handleChange}
          id="email"
          name="email"
          type="email"
          value={formik.values.email}
          onBlur={formik.onBlur}
        />
        <div>
          {formik.errors.email && formik.touched.email && formik.errors.email}
        </div>

        <button type="submit" onClick={formik.handleReset}>
          Submit
        </button>
      </FooterWrap>
    </div>
  );
};
