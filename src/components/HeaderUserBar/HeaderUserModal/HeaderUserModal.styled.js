import styled from 'styled-components';

export const ModalBox = styled.div`
position: absolute;
width: 177px;
height: 134px;
top: calc(100% + 14px);
right: 0;
display: flex;
flex-direction: column;
background-color: ${p => p.theme.colors.bodyBg};

border-radius: 8px;
padding: 18px;
gap: 28px;
  border: 1px solid #8baa36;
  border-radius: ${p => p.theme.radii.image};
  @media screen and (min-width: 768px) {
    gap: 32px;
  }

`

export const EditBtn = styled.button`
 display: flex;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  cursor: pointer;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[2]};
  line-height: ${p => p.theme.lineHeights.headerLinks};
  font-size: 14px;
  color: ${p => p.theme.colors.mainDark};
  transition: ${p => p.theme.transitions.main};
  & svg {
    width: 14px;
    height: 14px;
    stroke: currentColor;
  }
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.mainAccent};
  }
`
export const LogoutBtn = styled.button`
position: absolute;
width: 141px;
height: 43px;
left: 18px;
top: 73px;

background: #8BAA36;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;

color: #FAFAFA;

clip-path: inset(25% 0 25% 0 round 15% 35% 15% 30%); padding: 50px 42px; background-color: #8BAA36; border: red;

& svg {
    width: 18px;
    height: 18px;
    stroke: currentColor;
  }
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.mainAccent};
  }

`