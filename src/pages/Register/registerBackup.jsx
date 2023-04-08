// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import * as authOperation from '../../redux/auth/authOperation';

import { NavLink } from 'react-router-dom';
import { Container } from '@mui/material';
import { AuthBg, Button, Box, Input } from './Register.styled';
import AuthPanaDesRet from '../../images/desktop/AuthPanaDesRet.png';
import { getColor } from 'utils/formikColors';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';

const emailRegexp =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

const Register = () => {
  // const dispatch = useDispatch();
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const schema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .matches(/^[a-zA-Zа-яА-ЯА-ЩЬьЮюЯяЇїІіЄєҐґ0-9]+$/, {
        message: 'Special symbols are not allowed',
        excludeEmptyString: true,
      })
      .min(1, 'Your name must be 1 character at least')
      .max(16, '16 characters max')
      .required('Type your name please'),
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
      .min(6, 'Your password is too short')
      .max(16, 'Your password must be 16 characters max')
      .required('Type your password please'),
  });

  // const handleChange = ({ target: { name, value } }) => {
  //   switch (name) {
  //     case 'name':
  //       return setName(value);
  //     case 'email':
  //       return setEmail(value);
  //     case 'password':
  //       return setPassword(value);
  //     default:
  //       console.log('Invalid subscription type');
  //   }
  // };

  // const formSubmit = e => {
  //   e.preventDefault();
  //   const { name, email, password } = e;

  //   dispatch(authOperation.register({ name, email, password }));
  // };

  const submitHandler = e => {
    e.preventDefault();
    console.log(e);
    // dispatch(authOperation.register());
  };

  return (
    <AuthBg>
      <Container
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={AuthPanaDesRet} alt="authBg" width={532} />

        <Box>
          <h1>Registration</h1>
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
            }}
            isSubmitting={true}
            isInitialValid={true}
            validationSchema={schema}
            onSubmit={(values, actions) => {
              console.log(values, actions);
            }}
          >
            {props => (
              <Form onSubmit={submitHandler}>
                <Input
                  autoComplete="off"
                  type="text"
                  name="name"
                  tytle="name"
                  required
                  onChange={props.handleChange}
                  placeholder="Name"
                  onBlur={props.handleBlur}
                  value={props.values.name}
                  color={getColor(
                    props.errors.name,
                    props.values.name,
                    'rgba(255, 255, 255, 0.8)'
                  )}
                  borderColor={getColor(
                    props.errors.name,
                    props.values.name,
                    'rgba(255, 255, 255, 0.3)'
                  )}
                />
                <Input
                  autoComplete="off"
                  type="email"
                  name="email"
                  title="email"
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
                <Input
                  autoComplete="off"
                  type="password"
                  name="password"
                  title="password"
                  required
                  onChange={props.handleChange}
                  placeholder="password"
                  onBlur={props.handleBlur}
                  value={props.values.password}
                  color={getColor(
                    props.errors.password,
                    props.values.password,
                    'rgba(255, 255, 255, 0.8)'
                  )}
                  borderColor={getColor(
                    props.errors.password,
                    props.values.password,
                    'rgba(255, 255, 255, 0.3)'
                  )}
                />
                <Button type="submit">Sign up</Button>
              </Form>
            )}
          </Formik>
          <NavLink to={'/signin'}>Sign in</NavLink>
        </Box>
      </Container>
    </AuthBg>
  );
};
export default Register;
