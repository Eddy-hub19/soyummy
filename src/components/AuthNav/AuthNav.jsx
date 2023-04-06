import { NavLink } from 'react-router-dom';
import { BgImg, ButtonList } from './AuthNav.stuled';
import { Container } from '@mui/material';

export const AuthNav = () => {
  return (
    <BgImg>
      <Container>
        <h2>Welcome to the app</h2>
        <p>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </p>
        <ButtonList>
          <li>
            <NavLink to={'/register'}>Register</NavLink>
          </li>
          <li>
            <NavLink to={'/signin'}>Sign in</NavLink>
          </li>
        </ButtonList>
      </Container>
    </BgImg>
  );
};
