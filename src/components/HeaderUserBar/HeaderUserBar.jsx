// ShaderLayout

import ThemeSwitch from 'components/ThemeSwitch/ThemeSwitch';
import UserBar from 'components/UserBar/UserBar';
import { DivWrapper } from './SharedLayout.styled';



const SharedLayout = () => {
    return (
        <DivWrapper> 
            <UserBar  />
            <ThemeSwitch/>
        </DivWrapper>

  );
};

export default SharedLayout
