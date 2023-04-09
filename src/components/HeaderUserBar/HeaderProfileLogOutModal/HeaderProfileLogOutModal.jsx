import { createPortal } from 'react-dom';
import EditProfileModal from './EditProfileModal/EditProfileModal';
import LogOutModal from './LogOutModal/LogOutModal';

import {
  CloseBtnWrapper,
  ModalOverlay,
  ModalWindow,
} from './HeaderProfileLogOutModal.styled';
import { CloseBtn } from 'components/CloseBtn/CloseBtn';

const modalRoot = document.querySelector('#modal-root');

const HeaderProfileLogOutModel = ({
  status,
  name,
  avatarUrl,
  openUserModal,
}) => {
  const onBackdropClick = event => {
    if (event.currentTarget === event.target) {
      openUserModal();
    }
  };
  return createPortal(
    <ModalOverlay onClick={onBackdropClick}>
      <ModalWindow status={status}>
        <CloseBtnWrapper>
          <CloseBtn location="modal" onClick={openUserModal} />
        </CloseBtnWrapper>
        {status === 'edit' && (
          <EditProfileModal
            name={name}
            avatarUrl={avatarUrl}
            openUserModal={openUserModal}
          />
        )}
        {status === 'logout' && <LogOutModal openUserModal={openUserModal} />}
      </ModalWindow>
    </ModalOverlay>,
    modalRoot
  );
};

export default HeaderProfileLogOutModel;
