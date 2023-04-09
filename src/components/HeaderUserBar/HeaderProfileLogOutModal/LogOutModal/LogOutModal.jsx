import LogOutBtn from 'components/LogOutBtn/LogOutBtn';
import {
  LogOutModalWrapper,
  LogOutWrapper,
  TextConfirm,
} from './LogOutModal.styled';

const LogOutModal = () => {
  return (
    <LogOutModalWrapper>
      <TextConfirm>Are you sure you want to log out?</TextConfirm>
      <LogOutWrapper>
        <LogOutBtn text="Log out" />
        <LogOutBtn status="cancel" text="Cancel" />
      </LogOutWrapper>
    </LogOutModalWrapper>
  );
};
export default LogOutModal;
