import styled from 'styled-components';

import plugMob1 from '../../images/bg/bgSearch/bg_search_mob@1x.png';
import plugMob2 from '../../images/bg/bgSearch/bg_search_mob@2x.png';
import plugTablet1 from '../../images/bg/bgSearch/bg_search_tablet@1x.png';
import plugTablet2 from '../../images/bg/bgSearch/bg_search_tablet@2x.png';
import plugDesktop1 from '../../images/bg/bgSearch/bg_search_desktop@1x.png';
import plugDesktop2 from '../../images/bg/bgSearch/bg_search_desktop@2x.png';

export {
  plugMob1,
  plugMob2,
  plugTablet1,
  plugTablet2,
  plugDesktop1,
  plugDesktop2,
};

export const EmptyDiv = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const EmptyTitle = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[1]};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  line-height: ${p => p.theme.lineHeights.subheader};
  font-size: 14px;
  text-align: center;
  font-feature-settings: 'liga' off;
  color: ${p => p.theme.colors.mainBlack};
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const EmptyImgDiv = styled.div`
  width: 208px;
  height: 133px;
  margin: 0 auto;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 350px;
    height: 225px;
    margin-bottom: 32px;
  }
`;
