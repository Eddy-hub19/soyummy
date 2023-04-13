import { NavLink } from 'react-router-dom';

const { default: styled } = require('styled-components');
export const StyledPoularList = styled.div`
  margin-top: 100px;
  @media screen and (min-width: 1440px) {
    width: 319px;
  }
`;
export const StyledList = styled.ul`
  margin: 0px;
  padding: 0px;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    display: flex;
    align-items: center;
    gap: 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 319px;
  }
`;

export const StyledPopTitle = styled.h3`
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.24px;
  color: ${p => p.theme.colors.sectionHeader};
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const StyledPopitem = styled.li`
  border-radius: 8px;

  &:hover {
    -webkit-box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 24px 0px #000000,
      -9px -6px 27px -2px rgba(35, 196, 49, 0.339);
    box-shadow: 5px 5px 5px 0px rgba(155, 191, 56, 0.253),
      inset 4px 4px 24px 0px rgba(139, 170, 54, 0.678),
      -9px -6px 27px -2px rgba(139, 170, 54, 0.018);
  }

  @media screen and (max-width: 767px) {
    width: 343px;
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    &:nth-last-child(-n + 2) {
      display: none;
    }
  }
  @media screen and (min-width: 1440px) {
    :not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  height: 98px;
  gap: 12px;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    opacity: 0.17;
  }
`;

export const ImgWrapper = styled.div`
  width: 104px;
  height: 85px;
  border-radius: 8px;
  overflow: hidden;

  img {
    max-width: 100%;
  }
  @media screen and (min-width: 1440px) {
    width: 97px;
  }
`;

export const TextWrapper = styled.div`
  width: 213px;
  padding-bottom: 20px;
  width: 319px;
  @media screen and (min-width: 768px) {
    width: 209px;
  }
  @media screen and (min-width: 1440px) {
    width: 198px;
  }
`;

export const ItemTitle = styled.h4`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.24px;
  color: ${p => p.theme.colors.sectionHeader};
  margin-bottom: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.24px;
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;
