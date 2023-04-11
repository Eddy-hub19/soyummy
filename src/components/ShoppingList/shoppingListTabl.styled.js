import styled from 'styled-components';

export const Thumb = styled.div`
  padding-bottom: 100px;

  @media screen and (min-width: 768px) {
    padding-bottom: 200px;
  }
`;

export const Table = styled.ul`
  width: 100%;
  font-family: ${p => p.theme.fonts.main};
  @media screen and (min-width: 769px) {
    margin-top: -25px;
  }
`;

export const TableItem = styled.li`
  display: flex;
  align-items: start;
  gap: 24px;
  justify-content: space-between;
  padding: 15px 10px;
  border-bottom: 1px solid rgb(224, 224, 224);
  &:first-of-type {
    font-weight: 600;
    font-size: 12px;
    line-height: calc(18 / 12);
    height: 40px;
    padding: 10px;
    background-color: ${p => p.theme.colors.mainAccent};
    letter-spacing: 0.03em;
    color: ${p => p.theme.colors.mainLight};
    align-items: center;
    border-radius: 10px;
    @media screen and (min-width: 769px) and (max-width: 1440px) {
      gap: 80px;
      height: 60px;
      padding: 20px;
      font-size: 18px;
    }
    @media screen and (min-width: 1441px) {
      gap: 140px;
      height: 60px;
      padding: 0 40px;
      font-size: 18px;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1440px) {
    gap: 80px;
    padding: 45px 20px;
  }
  @media screen and (min-width: 1441px) {
    gap: 140px;
    padding: 50px 40px;
  }
`;

export const TableFirstCol = styled.div`
  display: flex;

  min-width: 225px;
  @media screen and (min-width: 769px) and (max-width: 1440px) {
    width: 450px;
  }
  @media screen and (min-width: 1441px) {
    width: 750px;
  }
`;

export const TableSecondThirdCol = styled.div`
  text-align: center;
`;

export const BoxForImage = styled.div`
  height: 60px;
  width: 60px;
  background-color: ${p => p.theme.colors.ingredientsBgrCol};
  border-radius: 10px;
  margin-right: 10px;

  @media screen and (min-width: 769px) {
    height: 95px;
    width: 95px;
    margin-right: 15px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const ItemName = styled.p`
  font-weight: 500;
  line-height: calc(24 / 16);
  font-size: 10px;
  color: ${p => p.theme.colors.secondaryDark};

  @media screen and (min-width: 769px) {
    font-size: 16px;
  }
`;

export const ItemNumber = styled.p`
  min-width: 37px;
  background-color: ${p => p.theme.colors.mainAccent};
  border-radius: 4px;
  padding: 4px 4px;
  font-weight: 600;
  font-size: 10px;
  line-height: calc(27 / 18);
  color: ${p => p.theme.colors.mainLight};
  text-align: center;
  @media screen and (min-width: 769px) {
    margin-right: -10px;
    min-width: 68px;
    font-size: 18px;
  }
`;

export const DeleteBtn = styled.button`
  width: 54px;
  height: 14px;
  padding: 0 20px;
  stroke: ${p => p.theme.colors.secondaryDark};
  cursor: pointer;
  transition: ${p => p.theme.transitions.main};
  @media screen and (min-width: 769px) {
    width: 80px;
    height: 20px;
    padding: 0 30px;
    &:hover {
      stroke: ${p => p.theme.colors.mainAccent};
    }
  }
`;
