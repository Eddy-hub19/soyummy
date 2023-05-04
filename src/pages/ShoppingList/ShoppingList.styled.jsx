import styled from "styled-components";

export const Container = styled.div`
  padding: 0 16px;
  padding-bottom: 149px;
  max-width: 767px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
    padding-bottom: 200px;
    max-width: 1439px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 100px;
  }
`;
export const Thumb = styled.div`
  padding-bottom: 100px;

  @media screen and (min-width: 768px) {
    padding-bottom: 200px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 100px;
  }
`;
