import styled from 'styled-components';

export const Title = styled.h2`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  line-height: 1;
  text-align: center;
  letter-spacing: -0.005em;

  color: #8baa36;
`;

export const SubTitle = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  width: 465px;

  color: ${p => p.theme.colors.mainNavLinkHover};
`;

export const Span = styled.span`
  color: ${p => p.theme.colors.mainHeaderText};
`;
