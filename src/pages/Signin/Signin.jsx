// import { useState } from 'react';
// import { useDispatch } from 'react-redux';

// import * as authOperation from '../../redux/auth/authOperation';

import { NavLink } from 'react-router-dom';
import css from './Signin.module.css';

const SignIn = () => {
  //   const dispatch = useDispatch();
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');

  //   const handleChange = ({ target: { name, value } }) => {
  //     switch (name) {
  //       case 'email':
  //         return setEmail(value);
  //       case 'password':
  //         return setPassword(value);
  //       default:
  //         console.log('Invalid subscription type');
  //     }
  //   };

  //   const formSubmit = e => {
  //     e.preventDefault();
  //     dispatch(authOperation.logIn({ email, password }));
  //     e.currentTarget.reset();
  //     setEmail('');
  //     setPassword('');
  //   };
  return (
    <main className={css.container}>
      <div className={css.loginBox}>
        <h1 className={css.text}>Sign In</h1>
        <form>
          {/*onSubmit={formSubmit} */}
          <div className={css.userBox}>
            <input
              autoComplete="off"
              type="email"
              name="email"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              //   onChange={handleChange}
            />
            <label>Mail</label>
          </div>
          <div className={css.userBox}>
            <input
              autoComplete="off"
              type="password"
              name="password"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              //   onChange={handleChange}
            />
            <label>Password</label>
          </div>
          <button className={css.button} type="submit">
            Sign in
          </button>
        </form>
        <NavLink to={'/register'}>Register</NavLink>
      </div>
    </main>
  );
};
export default SignIn;
