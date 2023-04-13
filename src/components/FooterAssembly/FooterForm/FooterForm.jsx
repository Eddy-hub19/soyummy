import * as React from 'react';
// import { useMediaRules } from 'hooks/MediaRules';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import styled from 'styled-components';
// import { getColor } from 'utils/formikColors';
// import sprite from '../../../images/sprite.svg';
// import { HiOutlineMail } from 'react-icons/hi';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  FooterWrap,
  FooterWrapText,
  FooterWrapInput,
  FooterWrapBtn,
  // InputFlag,
  // FooterWrapBtn,
} from './FooterForm.styled';
import { axiosInstance } from 'service/API/axios';
import { FooterAssembly } from '../FooterAssembly';

export const FooterForm = () => {
  // const { isDesktop } = useMediaRules();

  const validate = values => {
    const errors = {};
    if (!values.email) {
      toast.error(' Email address is required!!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      toast.error('Oops.. Invalid email!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
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
      formik.handleReset();
    },
  });

  return (
    <FooterWrap onSubmit={formik.handleSubmit}>
      <FooterWrapText>
        <h4>Subscribe to our Newsletter</h4>
        <p>
          Subscribe up to our newsletter. Be in touch with latest news and
          special offers, etc.
        </p>
      </FooterWrapText>
      {/* <form onSubmit={formik.handleSubmit}> */}
      <FooterWrapInput
        onChange={formik.handleChange}
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email address"
        value={formik.values.email}
        onBlur={formik.onBlur}
      />
      <div>
        {formik.errors.email && formik.touched.email && formik.errors.email}
      </div>
      <ToastContainer />

      <FooterWrapBtn type="submit">
        {/* <button type="submit" onClick={formik.handleReset}> */}
        Subscribe
      </FooterWrapBtn>
      {/* </form> */}
    </FooterWrap>
  );
};

/* <Formik
        initialValues={{ email: `` }}
        validationSchema={LoginSchema}
        onSubmit={(values, actions) => {}}
      >
        {props => (
          <FooterWrap onSubmit={props.handleSubmit}>
            {isDesktop && (
              <FooterWrapText>
                <h4>Subscribe to our Newsletter</h4>
                <p>
                  Subscribe up to our newsletter. Be in touch with latest news
                  and special offers, etc.
                </p>
              </FooterWrapText>
            )}
            <div style={{ position: 'relative' }}>
              <FooterWrapInput
                type="email"
                placeholder="Enter your email address"
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                value={props.values.email}
                name="email"
                color={getColor(
                  props.errors.email,
                  props.values.email,
                  'rgba(255, 255, 255, 0.8)'
                )}
                borderColor={getColor(
                  props.errors.email,
                  props.values.email,
                  'rgba(255, 255, 255, 0.3)'
                )}
              />

              <HiOutlineMail
                className="Envelope"
                fill={getColor(
                  props.errors.email,
                  props.values.email,
                  'rgba(255, 255, 255, 0.8)'
                )}
              ></HiOutlineMail>
            </div>

            {props.values.email && (
              <div style={{ postioin: 'relative' }}>
                <InputFlag>
                  <svg>
                    <use
                      href={`${sprite}${getColor(
                        props.errors.email,
                        props.values.email,
                        'rgba(255, 255, 255, 0.8)'
                      )}`}
                    ></use>
                  </svg>
                </InputFlag>
              </div>
            )}

            {props.errors.email && props.values.email && (
              <ErrorMessage className="error" name="email" component="div" />
            )}
            <FooterWrapBtn
              type="submit"
              disabled={getDisabledBtn(props.errors.email, props.values.email)}
            >
              Subcribe
            </FooterWrapBtn>
          </FooterWrap>
        )}
      </Formik> */
