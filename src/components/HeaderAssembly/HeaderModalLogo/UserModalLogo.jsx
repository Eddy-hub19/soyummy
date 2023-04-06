import { UserMenu, EditProfileBtn, LogOutBtn } from './UserModalLogo.styled';
import sprite from '../../../images/sprite.svg';

export const HeaderUserModalLogo = ({ toggleBtnModal }) => {
  return (
    <>
      <UserMenu>
        <EditProfileBtn type="button" onClick={() => toggleBtnModal('edit')}>
          <span>Edit profile</span>
          <svg>
            <use href={sprite + `#edit`} />
          </svg>
        </EditProfileBtn>
        <LogOutBtn type="button" onClick={() => toggleBtnModal('logout')}>
          <span>Log Out</span>
          <svg>
            <use href={sprite + `#arrow-right`} />
          </svg>
        </LogOutBtn>
      </UserMenu>
    </>
  );
};
