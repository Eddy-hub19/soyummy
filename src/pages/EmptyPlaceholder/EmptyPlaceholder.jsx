import {
  EmptyDiv,
  EmptyTitle,
  EmptyImgDiv,
  plugMob1,
  plugMob2,
  plugTablet1,
  plugTablet2,
  plugDesktop1,
  plugDesktop2,
} from './EmptyPlaceholder.styled';
import { axiosInstance } from 'service/API/axios';

export const EmptyPlaceholder = ({ text }) => {
  console.log(axiosInstance.defaults.headers.common.Authorization);
  return (
    <EmptyDiv>
      <EmptyImgDiv>
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={`${plugDesktop1}, ${plugDesktop2} 2x`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${plugTablet1}, ${plugTablet2} 2x`}
          />
          <img
            src={plugMob1}
            srcSet={`${plugMob1}, ${plugMob2} 2x`}
            alt="no items found"
          />
        </picture>
      </EmptyImgDiv>
      <EmptyTitle>{text}</EmptyTitle>
    </EmptyDiv>
  );
};
