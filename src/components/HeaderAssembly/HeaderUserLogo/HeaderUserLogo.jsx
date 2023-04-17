import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";
import userAvatar from "../../../images/default.jpg";
import { HeaderUserModal } from "../HeaderUserModal/HeaderUserModal";
import { HeaderUserModalLogo } from "../HeaderModalLogo/UserModalLogo";
import { HeaderUserBtn, HeaderUserWrapper } from "./HeaderUserLogo.styled";

export const HeaderUserLogo = ({ avatarUrl = userAvatar, color = "light" }) => {
  const user = useSelector(authSelectors.getUserData);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [statusModal, setStatusModal] = useState("");

  const toggleUserMenu = (e) => {
    setShowUserMenu(!showUserMenu);
  };

  const toggleUserModal = (status) => {
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
    const onEscPress = (event) => {
      if (event.code === "Escape") {
        setShowUserMenu(false);
      }
    };

    window.addEventListener("keydown", onEscPress);

    return () => {
      window.removeEventListener("keydown", onEscPress);
    };
  }, []);

  return (
    <>
      <HeaderUserWrapper>
        <HeaderUserBtn type="button" onClick={toggleUserMenu} onBlur={handleBlur} color={color}>
          <img src={user.avatarURL ? user.avatarURL : avatarUrl} alt={user.name} />
          <p>{user.name}</p>
        </HeaderUserBtn>

        {showUserMenu && <HeaderUserModalLogo setShowUserMenu={setShowUserMenu} toggleModal={toggleUserModal} />}
      </HeaderUserWrapper>

      {showModal && (
        <HeaderUserModal
          name={user.name}
          avatarUrl={user.avatarURL ? user.avatarURL : avatarUrl}
          closeModal={toggleUserModal}
          status={statusModal}
        />
      )}
    </>
  );
};
