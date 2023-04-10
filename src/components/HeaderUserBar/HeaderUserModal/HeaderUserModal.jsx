import { EditBtn, LogoutBtn, ModalBox } from './HeaderUserModal.styled';
import sprite from '../../../images/sprite.svg';

const HeaderUserModal = ({ openUserModal }) => {
  return (
    <ModalBox>
      <EditBtn type="button" onClick={() => openUserModal('edit')}>
        <span>Edit profile</span>
        <svg>
          <use href={sprite + `#edit`} />
        </svg>
      </EditBtn>
      <LogoutBtn type="button" onClick={() => openUserModal('logout')}>
        <span>Log Out</span>
        <svg>
          <use href={sprite + `#arrow-right`} />
        </svg>
      </LogoutBtn>
    </ModalBox>
  );
};

export default HeaderUserModal;
