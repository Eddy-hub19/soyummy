import { useEffect, useState } from 'react';
import userAvatar from '../../../images/default.jpg';
import { HeaderUserModal } from '../HeaderUserModal/HeaderUserModal';
import { HeaderUserModalLogo } from '../HeaderModalLogo/UserModalLogo';
import { HeaderUserBtn, HeaderUserWrapper } from './HeaderUserLogo.styled';

export const HeaderUserLogo = ({
  avatarUrl = userAvatar,
  color = 'light',
  name = 'User',
}) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [statusModal, setStatusModal] = useState('');

  const toggleUserMenu = e => {
    setShowUserMenu(!showUserMenu);
  };

  const toggleUserModal = status => {
    setShowModal(!showModal);
    setStatusModal(status);
    setShowUserMenu(false);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowUserMenu(false);
    }, 300);
  };

  useEffect(() => {
    const onEscPress = event => {
      if (event.code === 'Escape') {
        setShowUserMenu(false);
      }
    };

    window.addEventListener('keydown', onEscPress);

    return () => {
      window.removeEventListener('keydown', onEscPress);
    };
  }, []);

  return (
    <>
      <HeaderUserWrapper>
        <HeaderUserBtn
          type="button"
          onClick={toggleUserMenu}
          onBlur={handleBlur}
          color={color}
        >
          <img src={avatarUrl} alt={name} />
          <p>{name}</p>
        </HeaderUserBtn>

        {showUserMenu && (
          <HeaderUserModalLogo
            setShowUserMenu={setShowUserMenu}
            toggleModal={toggleUserModal}
          />
        )}
      </HeaderUserWrapper>

      {showModal && (
        <HeaderUserModal
          name={name}
          avatarUrl={avatarUrl}
          closeModal={toggleUserModal}
          status={statusModal}
        />
      )}
    </>
  );
};
