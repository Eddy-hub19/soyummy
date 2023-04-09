import styled from 'styled-components';
import FormAuthDes from '../../images/desktop/FormAuthDes.png';
import mobileBg from '../../images/mobile/FormAuthMob-min.png';
import tabletBg from '../../images/tablet/FormAuthTab-min.png';

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 21px 138px;
  gap: 8px;

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
  @media (max-width: 700px) {
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

// export const Input = styled.imput``;

/* .container {
  margin: auto;
  padding: 0;
  max-width: 800px;
}
.text {
  margin-top: 100px;
  margin-bottom: 60px;
  padding-left: auto;
  padding-right: auto;
  width: 340px;
  display: flex;
  justify-content: center;
  color: #03e9f4;
  padding: 10px;
  font-size: 40px;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 7px;
  overflow: hidden;
  background: #03e9f4;
  color: black;
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
  font-size: 16px;
}
.loginBox .userBox input:focus ~ label:nth-child(2),
.loginBox .userBox input:valid ~ label:nth-child(2) {
  filter: hue-rotate(110deg);
}
.button {
   background: #8BAA36;
  min-width: 100px;
  text-decoration: none;
  position: relative;
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.35s;
  letter-spacing: 4px;
  overflow: hidden;
  border: none;
  border-radius: 15px;
  box-shadow: 0 5px #666;
}
.button:active {
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.button:hover {
  background: #03e9f4;
  color: #050801;
}
 */
