import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import {
  Content,
  ConfirmText,
  LogoutWrapper,
  LogoutMenuBtn,
} from './HeaderLogoutConfirmation.styled';

export const LogoutAssembly = ({ closeModalWindow }) => {
  const dispatch = useDispatch();
  const onLogOutBtnClick = () => {
    dispatch(logOut());
    closeModalWindow();
  };
  return (
    <Content>
      <ConfirmText>Are you sure you want to log out?</ConfirmText>
      <LogoutWrapper>
        <LogoutMenuBtn onClick={onLogOutBtnClick}>Log out</LogoutMenuBtn>
        <LogoutMenuBtn status="cancel" onClick={closeModalWindow}>
          Cancel
        </LogoutMenuBtn>
      </LogoutWrapper>
    </Content>
  );
};
