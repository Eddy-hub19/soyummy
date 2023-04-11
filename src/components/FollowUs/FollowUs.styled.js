import styled from 'styled-components';

export const FolowUsTitle = styled.h3`
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.24px;
  color: ${p => p.theme.colors.sectionHeader};
  margin-bottom: 40px;
  @media screen and (max-width: 1439px) {
    display: none;
  }
`;

export const IconsFolowUs = styled.div`
  display: flex;
  width: 100%;
  margin-top: 40px;
  gap: 18px;
  align-items: center;
  justify-content: space-aroud;

  svg {
    fill: ${p => p.theme.colors.mainAccent};
    transition: ${p => p.theme.transitions.main};

    :hover {
      fill: ${p => p.theme.colors.iconHover};
    }
  }

  @media screen and (min-width: 768px) {
    margin-top: 38px;
    gap: 18px;
  }
  @media screen and (max-width: 1439px) {
    display: none;
  }
`;
