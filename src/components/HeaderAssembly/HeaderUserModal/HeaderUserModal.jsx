import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import {
  HeaderCloseBtnWrapper,
  HeaderModalOverlay,
  ModalWindow,
} from './HeaderUserModal.styled.js';

import { CloseBtnAssembly } from 'components/CloseButtonAssembly/CloseBtnAssembly.jsx';
import { UserFormAssembly } from './HeaderUserForm.jsx';
import { LogoutAssembly } from './HeaderLogoutConfirmation.jsx';

const modalRoot = document.querySelector('#modal-root');

export const HeaderUserModal = ({ status, name, closeModal, avatarUrl }) => {
  useEffect(() => {
    const onEscPress = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', onEscPress);

    return () => {
      window.removeEventListener('keydown', onEscPress);
    };
  }, [closeModal]);

  const onBackdropClick = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  return createPortal(
    <HeaderModalOverlay onClick={onBackdropClick}>
      <ModalWindow status={status}>
        <HeaderCloseBtnWrapper>
          <CloseBtnAssembly location="modal" onClick={closeModal} />
        </HeaderCloseBtnWrapper>

        {status === 'edit' && (
          <UserFormAssembly
            name={name}
            avatarUrl={avatarUrl}
            closeModal={closeModal}
          />
        )}
        {status === 'logout' && <LogoutAssembly closeModal={closeModal} />}
      </ModalWindow>
    </HeaderModalOverlay>,
    modalRoot
  );
};
