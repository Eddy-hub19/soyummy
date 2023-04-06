import styled from 'styled-components';

export const FollowUsWrap = styled.div`
  margin-top: 44px;
  display: none;
  gap: 14px;
  align-items: center;
  justify-content: center;
  flex-directiom: column;

  svg {
    fill: ${p => p.theme.colors.footerSMlinks};
    transition: ${p => p.theme.transitions.main};

    :hover {
      fill: ${p => p.theme.colors.footerSMlinksHover};
    }
  }

  @media screen and (min-width: 768px) {
    margin-top: 38px;
    gap: 18px;
  }
`;

export const IconsFolowUs = styled.div`
  display: flex;
`;
