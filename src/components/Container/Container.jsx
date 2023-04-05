import { MainConteiner } from './Container.styled';

export const Container = ({ children }) => {
  return <MainConteiner>{children}</MainConteiner>;
};

//Rendering children's element inside itself with classic container sting
