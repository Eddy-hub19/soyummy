import styled from "styled-components";

export const ContainerForm = styled.div`
  padding: 0 16px;
  padding-bottom: 149px;
  max-width: 767px;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
    padding-bottom: 200px;
    max-width: 1439px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 100px;
  }
`;
export const OtherButton = styled.button`
  border-radius: 18px 44px;
  color: ${(p) => p.theme.colors.mainBtnText};
  background-color: transparent;
  border: ${(p) => p.theme.borders.btnHover};
  cursor: pointer;
  font-family: ${(p) => p.theme.fonts.main};
  font-weight: ${(p) => p.theme.fontWeights[0]};
  line-height: ${(p) => p.theme.lineHeights.subheader};
  font-size: 14px;
  margin-top: 40px;
  padding: 20px 52px;
  min-width: 61px;

  :hover,
  :focus {
    border-color: ${(p) => p.theme.borders.btnHover};
    background-color: ${(p) => p.theme.colors.mainAccent};
    color: ${(p) => p.theme.colors.bodyBg};
  }

  @media screen and (min-width: 768px) {
    padding: 16px 42px;
    min-width: 130px;
    margin-top: 50px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: ${(p) => p.theme.lineHeights.btnText};
    padding: 23px 52px;
    min-width: 160px;
    margin-bottom: 118px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Text = styled.div`
  padding-bottom: 100px;
`;
