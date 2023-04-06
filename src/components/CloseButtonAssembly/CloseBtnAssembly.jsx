import { CloseButton } from './CloseBtnAssembly.styled';
import sprite from '../../images/sprite.svg';

export const CloseBtnAssembly = ({ location, onClick }) => {
  return (
    <CloseButton location={location} type="button" onClick={onClick}>
      <svg>
        <use href={sprite + `#close-btn`} />
      </svg>
    </CloseButton>
  );
};
