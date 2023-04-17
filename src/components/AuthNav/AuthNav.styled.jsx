import styled from "styled-components";
import bgImg from "../../images/tablet/mainTab-min.png";
import bgImgDes from "../../images/desktop/mainDes.png";

export const BgImg = styled.div`
  height: 100vh;
  width: 100vw;

  @media screen and (min-width: 1440px) {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${bgImgDes});
  }
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 58.58%,
      rgba(0, 0, 0, 0.345172) 78.98%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${bgImg});

  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 40%;
`;

export const Wraper = styled.div`
  padding-top: 214px;
  padding-bottom: 216px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonList = styled.ul`
  margin-top: 49px;
  gap: 18px;
  display: flex;
`;

export const Button = styled.button`
  border-radius: 18px 44px;
  padding: 19.5px 42px;
  background-color: initial;
  border: 2px solid;

  color: #fafafa;
  border-color: #fafafa;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  transition: ${({ theme }) => theme.transitions.main};

  &:hover {
    color: ${({ theme }) => theme.colors.mainAccent};
    background-color: transparent;
    border-color: ${({ theme }) => theme.colors.mainAccent};

    &:active:focus {
      /* box-shadow: 0 5px #666; */
      transform: translateY(4px);
      color: #fafafa;
      background-color: ${({ theme }) => theme.colors.mainAccent};
    }
  }
`;

export const Box = styled.div`
  margin-top: 35px;
  font-family: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 14px;

  color: #fafafa;
`;
