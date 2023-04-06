// import { useState } from 'react';
// import { useDispatch } from 'react-redux';

// import * as authOperation from '../../redux/auth/authOperation';

import { NavLink } from 'react-router-dom';
import css from './Register.module.css';

const Register = () => {
  //   const dispatch = useDispatch();
  //   const [name, setName] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');

  //   const handleChange = ({ target: { name, value } }) => {
  //     switch (name) {
  //       case 'name':
  //         return setName(value);
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
  //     dispatch(authOperation.register({ name, email, password }));
  //     setName('');
  //     setEmail('');
  //     setPassword('');
  //   };

  return (
    <main className={css.container}>
      <div className={css.loginBox}>
        <h1 className={css.text}>Register</h1>
        <form>
          {/* onSubmit={formSubmit} */}
          <div className={css.userBox}>
            <input
              autoComplete="off"
              type="text"
              name="name"
              required
              //   onChange={handleChange}
            />
            <label>Name</label>
          </div>
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
            Sign up
          </button>
        </form>
        <NavLink to={'/signin'}>Sign in</NavLink>
      </div>
    </main>
  );
};
export default Register;
