import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperation';
import {
  LogOutContainer,
  LogOutText,
  LogoutWrapper,
  LogoutBtn,
  LogoutBtnCancel,
} from './HeaderLogoutConfirmation.styled';

export const LogoutAssembly = ({ closeModal }) => {
  const dispatch = useDispatch();
  const onLogOutBtnClick = () => {
    dispatch(logOut());
    closeModal();
  };
  return (
    <LogOutContainer>
      <LogOutText>Are you sure you want to log out?</LogOutText>
      <LogoutWrapper>
        <LogoutBtn onClick={onLogOutBtnClick}>Log out</LogoutBtn>
        <LogoutBtnCancel status="cancel" onClick={closeModal}>
          Cancel
        </LogoutBtnCancel>
      </LogoutWrapper>
    </LogOutContainer>
  );
};
