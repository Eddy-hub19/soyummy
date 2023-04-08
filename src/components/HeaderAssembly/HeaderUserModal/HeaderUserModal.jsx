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

export const HeaderUserModal = ({
  status,
  name,
  closeModalWindow,
  avatarUrl,
}) => {
  useEffect(() => {
    const onEscPress = event => {
      if (event.code === 'Escape') {
        closeModalWindow();
      }
    };

    window.addEventListener('keydown', onEscPress);

    return () => {
      window.removeEventListener('keydown', onEscPress);
    };
  }, [closeModalWindow]);

  const onBackdropClick = event => {
    if (event.currentTarget === event.target) {
      closeModalWindow();
    }
  };

  return createPortal(
    <HeaderModalOverlay onClick={onBackdropClick}>
      <ModalWindow status={status}>
        <HeaderCloseBtnWrapper>
          <CloseBtnAssembly location="modal" onClick={closeModalWindow} />
        </HeaderCloseBtnWrapper>

        {status === 'edit' && (
          <UserFormAssembly
            name={name}
            avatarUrl={avatarUrl}
            closeModalWindow={closeModalWindow}
          />
        )}
        {status === 'logout' && (
          <LogoutAssembly closeModalWindow={closeModalWindow} />
        )}
      </ModalWindow>
    </HeaderModalOverlay>,
    modalRoot
  );
};
