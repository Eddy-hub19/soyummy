import styled from 'styled-components';
import FormAuthDes from '../../images/desktop/FormAuthDes.png';
import mobileBg from '../../images/mobile/FormAuthMob-min.png';
import tabletBg from '../../images/tablet/FormAuthTab-min.png';

export const Input = styled.input`
  max-width: 199px;
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

  @media screen and (min-width: 768px) {
    height: 46px;
    padding-left: 51px;
    font-size: 14px;
    line-height: 21px;
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

  max-width: 500px;
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

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 21px;
  gap: 8px;

  @media (max-width: 900px) {
    width: 279px;
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
  }
`;

export const AuthBg = styled.div`
  @media (max-width: 767px) {
    background-image: url(${mobileBg});
  }
  @media (min-width: 768), (max-width: 1439px) {
    background-image: url(${tabletBg});
  }
  @media (min-width: 1440px) {
    background-image: url(${FormAuthDes});
  }
  height: 100vh;
  width: 100vw;

  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
`;

/* 

.container {
  margin: auto;
  padding: 0;
  max-width: 800px;
}
.text {
  margin: 0;
  margin-top: 122px;
  margin-bottom: 60px;
  width: 340px;
  text-align: center;
  padding: 10px;
  font-size: 40px;
  text-transform: uppercase;
  letter-spacing: 7px;
  overflow: hidden;
  border: none;
background-color:#03e9f4;
border-radius: 15px;
}
.text:nth-child(1) {
  filter: hue-rotate(180deg);
}
.loginBox {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 20px;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  border-radius: 10px;
}
.loginBox .userBox {
  position: relative;
}
.loginBox .userBox input {
  width: 100%;
  padding: 10px 0;
  font-size: 18px;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  background: transparent;
}
.loginBox .userBox label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 18px;
  pointer-events: none;
  transition: 0.5s;
}
.loginBox .userBox input:focus ~ label,
.loginBox .userBox input:valid ~ label {
  top: -30px;
  left: 0;
  color: grey;
  font-size: 16px;
}
.loginBox .userBox input:focus ~ label:nth-child(2),
.loginBox .userBox input:valid ~ label:nth-child(2) {
  filter: hue-rotate(110deg);
}
.button {
  clip-path: inset(25% 0 25% 0 round 15% 35% 15% 30%) ;
  padding: 50px 42px;
  background-color: #8BAA36;
  border: none;
}
.button:hover {
  background: #22252A;
  color: #FAFAFA;
}
.button:active {
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
 */
