const { default: styled } = require('styled-components');

export const StyledPopTitle = styled.h3`
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.24px;
  color: black;
  margin-bottom: 32px;
`;

export const StyledPopitem = styled.li`
  position: relative;
  border-radius: 8px;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    opacity: 0.17;
    border: 1px solid var(--secondaryLineColor);
  }
`;

//   .itemLink {
//     display: flex;
//     height: 98px;
//     gap: 12px;
//   }

export const ImgWrapper = styled.div`
  width: 104px;
  height: 85px;
  border-radius: 8px;
  overflow: hidden;
`;

export const TextWrapper = styled.div`
  width: 213px;
  padding-bottom: 20px;
  width: 319px;
`;

export const ItemTitle = styled.h4`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.24px;
  color: var(--mainTextColor);
  margin-bottom: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.24px;
  color: black;
`;

//   @media screen and (max-width: 767px) {
//     .list {
//       width: 343px;
//     }
//     .item:not(:last-child) {
//       margin-bottom: 24px;
//     }
//   }

//   @media screen and (min-width: 768px) {
//     .title {
//       margin-bottom: 40px;
//     }

//     .textWrapper {
//       width: 209px;
//     }
//   }

//   @media screen and (min-width: 768px) and (max-width: 1439px) {
//     .list {
//       display: flex;
//       align-items: center;
//       gap: 32px;
//     }
//     .item:nth-last-child(-n + 2) {
//       display: none;
//     }
//   }

//   @media screen and (min-width: 1440px) {
//     .item:not(:last-child) {
//       margin-bottom: 24px;
//     }

//     .wrapper,
//     .list {
//       width: 319px;
//     }

//     .imgWrapper {
//       width: 97px;
//     }
//     .textWrapper {
//       width: 198px;
//     }
//   }
