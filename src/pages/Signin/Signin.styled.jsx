import styled from 'styled-components';
import FormAuthDes from '../../images/desktop/FormAuthDes.png';
import mobileBg from '../../images/mobile/FormAuthMob-min.png';
import tabletBg from '../../images/tablet/FormAuthTab-min.png';
import authPanaDesRet from '../../images/desktop/AuthPanaDesRet.png';
import authImgMob from '../../images/mobile/AuthPanaMobRet-min.png';
import authTabletImg from '../../images/tablet/AuthPanaTabRet-min.png';
import { NavLink } from 'react-router-dom';

export const Input = styled.input`
  font-style: normal;
  width: 100%;
  height: 41px;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.mainLight};
  background-color: transparent;
  border-radius: 6px;
  padding-left: 42px;
  padding-right: 38px;
  border: 1px solid ${({ borderColor }) => borderColor};
  outline: transparent;
  transition: ${p => p.theme.transitions.main};
  margin-bottom: 12px;

  @media screen and (max-width: 768px) {
    max-width: 199px;
    margin-bottom: 12px;
  }
  @media screen and (min-width: 768px) {
    max-width: 309px;
    height: 46px;
    padding-left: 51px;
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 51px;
    height: 59px;
  }

  :hover,
  :focus {
    border: 1px solid ${({ color }) => color};
    &::placeholder {
      opacity: 1;
    }
  }

  ::placeholder {
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    letter-spacing: -0.02em;
    color: ${p => p.theme.colors.mainLight};
    opacity: 0.8;

    @media screen and (min-width: 768px) {
      font-size: 14px;
      line-height: 21px;
    }
  }

  :-webkit-autofill {
    transition: background-color 250s linear, color 250s linear;
  }

  &:hover ~ svg.icon use {
    opacity: 1;
  }
`;

export const StyledLink = styled(NavLink)`
  color: black;

  &:hover {
    color: #8baa36;
  }
`;

export const InputWraper = styled.div`
  position: relative;

  .icon {
    @media screen and (max-width: 768px) {
      height: 1rem;
      width: 1rem;
      top: 39%;
    }
    position: absolute;
    height: 1.5rem;
    width: 1.5rem;
    position: absolute;
    box-sizing: border-box;
    top: 35%;
    left: 20px;
    transform: translateY(-50%);
  }

  .statusIcon {
    @media screen and (max-width: 768px) {
      height: 1rem;
      width: 1rem;
      top: 39%;
    }
    position: absolute;
    height: 1.5rem;
    width: 1.5rem;
    box-sizing: border-box;
    top: 38%;
    right: 10px;
    transform: translateY(-50%);
  }

  .error {
    @media screen and (max-width: 768px) {
      font-size: 10px;
      line-height: 15px;
    }
    position: absolute;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    transform: translateY(-90%);
    color: ${p => p.children[1].props.color};
  }
`;

export const Box = styled.div`
  @media (min-width: 1440px) {
    gap: 50px;
    padding: 44px 50px;
  }

  @media (min-width: 768px), (max-width: 1439px) {
    padding: 44px 50px;
    gap: 25px;
  }
  @media (max-width: 767px) {
    max-width: 279px;
    gap: 25px;
    padding: 32px 28px 40px;
  }
  margin-bottom: 18px;
  max-width: 400px;
  width: 100%;
  background-color: #2a2c36;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const BoxWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-decoration-line: underline;

    color: #fafafa;
  }
`;
export const Image = styled.div`
  @media (max-width: 767px) {
    background-image: url(${authImgMob});
    width: 285px;
    height: 250px;
  }
  @media (min-width: 768px) {
    background-image: url(${authTabletImg});
    width: 409px;
    height: 359px;
  }
  @media (min-width: 1440px) {
    background-image: url(${authPanaDesRet});
    width: 532px;
    height: 468px;
  }
  display: block;
  background-size: cover;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 21px;
  gap: 8px;
  margin-top: 26px;

  @media (max-width: 767px) {
    width: 279px;
    margin-top: 26px;
  }
  width: 400px;
  height: 59px;
  left: 50px;
  top: 316px;

  background: #8baa36;
  border-radius: 6px;

  color: #fafafa;

  transition: ${({ theme }) => theme.transitions.main};
  &:hover {
    color: black;

    &:active:focus {
      /* box-shadow: 0 5px #666; */
      transform: translateY(4px);
    }
    &:disabled {
      background: grey;
    }
  }
`;

export const AuthBg = styled.div`
  @media (min-width: 350px) {
    background-image: url(${mobileBg});
    background-position: 50% 320px;
  }

  @media (min-width: 768px) {
    background-image: url(${tabletBg});
    background-position: 50% 320px;
  }

  @media (min-width: 1440px) {
    background-image: url(${FormAuthDes});
    background-position: 50% 420px;
  }

  height: 100vh;
  min-height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 380px;
`;
export const Container = styled.div`
  @media (max-width: 767px) {
    flex-direction: column;
    margin-top: 87px;
  }
  @media (min-width: 768), (max-width: 1439px) {
    flex-direction: column;
    margin-top: 96px;
  }
  @media (min-width: 1440px) {
    margin-top: 50px;
  }
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
