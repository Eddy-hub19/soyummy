import { UserMenu, EditProfileBtn, LogOutBtn } from './UserModalLogo.styled';
import sprite from '../../../images/sprite.svg';

export const HeaderUserModalLogo = ({ toggleModal }) => {
  return (
    <>
      <UserMenu>
        <EditProfileBtn type="button" onClick={() => toggleModal('edit')}>
          <span>Edit profile</span>
          <svg>
            <use href={sprite + `#edit`} />
          </svg>
        </EditProfileBtn>
        <LogOutBtn type="button" onClick={() => toggleModal('logout')}>
          <span>Log Out</span>
          <svg>
            <use href={sprite + `#arrow-right`} />
          </svg>
        </LogOutBtn>
      </UserMenu>
    </>
  );
};
