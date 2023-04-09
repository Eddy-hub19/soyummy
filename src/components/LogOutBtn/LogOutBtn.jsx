import { LogoutMenuBtn } from './LogOutBtn.styled';

const LogOutBtn = ({ status = '', onClick, text }) => {
  return (
    <LogoutMenuBtn status={status} type="button" onClick={onClick}>
      {text}
    </LogoutMenuBtn>
  );
};

export default LogOutBtn;
