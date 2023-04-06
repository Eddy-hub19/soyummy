// ShaderLayout

import ThemeSwitch from 'components/ThemeSwitch/ThemeSwitch';
import UserBar from './UserBar/UserBar';
import { DivWrapper } from './UserSharedLayout.styled';

const UserSharedLayout = () => {
  return (
    <DivWrapper>
      <UserBar />
      <ThemeSwitch />
    </DivWrapper>
  );
};

export default UserSharedLayout;
