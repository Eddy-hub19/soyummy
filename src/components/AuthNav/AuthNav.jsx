import logo from '../../images/svg-before sprite/logo_desc.svg';
import { NavLink } from 'react-router-dom';
import { BgImg, ButtonList, Button, Box, Wraper } from './AuthNav.styled';
import { Container } from '@mui/material';

export const AuthNav = () => {
  return (
    <BgImg>
      <Container fixed>
        <Wraper>
          <img src={logo} alt="logo" />
          <Box>
            <h2>Welcome to the app!</h2>
            <p>
              This app offers more than just a collection of recipes - it is
              designed to be your very own digital cookbook. You can easily save
              and retrieve your own recipes at any time.
            </p>
          </Box>
          <ButtonList>
            <li>
              <NavLink to={'/register'}>
                <Button type="button">Register</Button>
              </NavLink>
            </li>
            <li>
              <NavLink to={'/signin'}>
                <Button type="button">Sign in</Button>
              </NavLink>
            </li>
          </ButtonList>
        </Wraper>
      </Container>
    </BgImg>
  );
};
