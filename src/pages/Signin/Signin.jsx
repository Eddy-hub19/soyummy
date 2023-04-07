import { useState } from 'react';
import { useDispatch } from 'react-redux';

import * as authOperation from '../../redux/auth/authOperation';

import { NavLink } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import { AuthBg, Button } from './Signin.styled';
import AuthPanaDesRet from '../../images/desktop/AuthPanaDesRet.png';

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        console.log('Invalid subscription type');
    }
  };

  const formSubmit = e => {
    e.preventDefault();
    dispatch(authOperation.logIn({ email, password }));
    e.currentTarget.reset();
    setEmail('');
    setPassword('');
  };
  return (
    <AuthBg>
      <Container
        fixed
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={AuthPanaDesRet} alt="authBg" width={532} />
        <Box
          sx={{
            width: '400px',
            backgroundColor: '#2A2C36',
            boxShadow: '0px 4px 48px rgba(0, 0, 0, 0.1)',
            borderRadius: 30,
            color: '#fafafa',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'center',
            gap: '50px',
            padding: '44px 50px',
          }}
        >
          <h2>Sign In</h2>
          <form onSubmit={formSubmit}>
            <div>
              <input
                autoComplete="off"
                type="email"
                name="email"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={handleChange}
              />
              <label>Mail</label>
            </div>
            <div>
              <input
                autoComplete="off"
                type="password"
                name="password"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={handleChange}
              />
              <label>Password</label>
            </div>
            <Button type="submit">Sign in</Button>
          </form>
          <NavLink to={'/register'}>Register</NavLink>
        </Box>
      </Container>
    </AuthBg>
  );
};
export default SignIn;
