import { useEffect, useState } from 'react';
import { HeaderUserButton, HeaderUserWrapper } from './UserBar.styled';
import userAvatar from '../../../images/default.jpg';
import HeaderUserModal from '../HeaderUserModal/HeaderUserModal';
import HeaderProfileLogOutModel from '../HeaderProfileLogOutModal/HeaderProfileLogOutModal';

const UserBar = ({
  name = 'User',
  avatarUrl = userAvatar,
  color = 'light',
}) => {
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [statusModal, setStatusModal] = useState('');

  const toggleUserMenu = e => {
    setOpenUserMenu(!openUserMenu);
  };

  const openUserModal = status => {
    setOpenUserMenu(false);
    setShowModal(!showModal);
    setStatusModal(status);
  };

  useEffect(() => {
    const onEscPress = event => {
      if (event.code === 'Escape') {
        setOpenUserMenu(false);
      }
    };

    window.addEventListener('keydown', onEscPress);

    return () => {
      window.removeEventListener('keydown', onEscPress);
    };
  }, []);

  const handleBlur = () => {
    setTimeout(() => setOpenUserMenu(false), 300);
  };

  return (
    <>
      <HeaderUserWrapper>
        <HeaderUserButton
          type="button"
          onClick={toggleUserMenu}
          onBlur={handleBlur}
        >
          <img src={avatarUrl} alt={name} />
          <p>{name}</p>
        </HeaderUserButton>
        {openUserMenu && (
          <HeaderUserModal
            openUserModal={openUserModal}
            setOpenUserMenu={() => setOpenUserMenu}
          />
        )}
      </HeaderUserWrapper>
      {showModal && (
        <HeaderProfileLogOutModel
          name={name}
          avatarUrl={avatarUrl}
          status={statusModal}
          openUserModal={openUserModal}
        />
      )}
    </>
  );
};

export default UserBar;
