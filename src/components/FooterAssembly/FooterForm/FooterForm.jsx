import * as React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FooterWrap,
  FooterWrapText,
  FooterWrapInput,
  FooterWrapBtn,
  InputContainer,
} from './FooterForm.styled';
import { axiosInstance } from 'service/API/axios';

export const FooterForm = () => {
  const validate = values => {
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
      return false;
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
      return false;
    }
    return true;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: value => {
      if (validate(value)) {
        axiosInstance
          .post('/auth/subscribe', value)
          .then(function (success) {
            toast.success('Subscribed successfully!', {
              position: 'top-right',
              autoClose: 1999,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
            });
          })
          .catch(function (error) {
            if (error.response) {
              toast.error(' This email is not registered. Please, try again.', {
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
          });
        formik.handleReset();
      }
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

      <InputContainer>
        <FooterWrapInput
          onChange={formik.handleChange}
          id="email"
          name="email"
          placeholder="Enter your email address"
          value={formik.values.email}
          onBlur={formik.onBlur}
        />

        <IconContext.Provider value={{ color: 'white', className: 'Envelope' }}>
          <AiOutlineMail />
        </IconContext.Provider>
      </InputContainer>

      <ToastContainer />

      <FooterWrapBtn type="submit">Subscribe</FooterWrapBtn>
    </FooterWrap>
  );
};
