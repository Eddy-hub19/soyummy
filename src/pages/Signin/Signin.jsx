import { useDispatch } from 'react-redux';
import * as authOperation from '../../redux/auth/authOperation';
import { CgLock } from 'react-icons/cg';
import { HiOutlineMail } from 'react-icons/hi';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  AuthBg,
  Button,
  Box,
  Input,
  BoxWraper,
  Image,
  Container,
  InputWraper,
  StyledLink,
} from './Signin.styled';
import { getColor } from 'utils/formikColors';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';

const emailRegexp =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

const SignIn = () => {
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    email: Yup.string()
      .matches(emailRegexp, {
        message: 'Your email must be valid',
        name: 'email',
        excludeEmptyString: true,
      })
      .min(5, 'Your email is too short')
      .max(254, 'Your email is too long')
      .lowercase()
      .required('Type your email please'),
    password: Yup.string()
      .trim()
      .matches(
        /^[a-zA-Zа-яА-ЯА-ЩЬьЮюЯяЇїІіЄєҐґ0-9]+(([' -][a-zA-Zа-яА-Я0-9 ])?[a-zA-Zа-яА-Я0-9]*)*$/,
        'Special symbols are not allowed'
      )
      .matches(/[1-9]/, 'Your password is little secure. Add a number!')
      .matches(
        /[a-zа-яA-ZА-ЯіїЇІєЄ]/,
        'Your password is little secure. Add a letter!'
      )
      .min(6, 'Your password is too short')
      .max(16, 'Your password must be 16 characters max')
      .required('Type your password please'),
  });

  return (
    <AuthBg>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <Container>
        <Image />
        <BoxWraper>
          <Box>
            <h1>Sign in</h1>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              isSubmitting={true}
              validateOnMount={true}
              validationSchema={schema}
              onSubmit={async (values, actions) => {
                const { email, password } = values;
                await dispatch(authOperation.logIn({ email, password }));
              }}
            >
              {props => (
                <Form>
                  <InputWraper>
                    <Input
                      autoComplete="off"
                      type="email"
                      name="email"
                      required
                      onChange={props.handleChange}
                      placeholder="Email"
                      onBlur={props.handleBlur}
                      value={props.values.email}
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
                      className="icon"
                      color={getColor(
                        props.errors.email,
                        props.values.email,
                        'rgba(255, 255, 255, 0.8)'
                      )}
                    ></HiOutlineMail>
                  </InputWraper>
                  <InputWraper>
                    <Input
                      autoComplete="off"
                      type="password"
                      name="password"
                      required
                      onChange={props.handleChange}
                      placeholder="password"
                      onBlur={props.handleBlur}
                      value={props.values.password}
                      color={'rgba(255, 255, 255, 0.8)'}
                      borderColor={'rgba(255, 255, 255, 0.3)'}
                    />
                    <CgLock
                      className="icon"
                      color={'rgba(255, 255, 255, 0.8)'}
                    />
                  </InputWraper>
                  <Button type="submit">Sign in</Button>
                </Form>
              )}
            </Formik>
          </Box>
          <StyledLink to={'/register'}>Register</StyledLink>
        </BoxWraper>
      </Container>
    </AuthBg>
  );
};
export default SignIn;
