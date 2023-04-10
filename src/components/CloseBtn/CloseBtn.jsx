import { CloseBtnComp } from './CloseBtn.styled';
import sprite from '../../images/sprite.svg';

export const CloseBtn = ({ location, onClick }) => {
  return (
    <CloseBtnComp location={location} type="button" onClick={onClick}>
      <svg>
        <use href={sprite + `#close-btn`} />
      </svg>
    </CloseBtnComp>
  );
};
