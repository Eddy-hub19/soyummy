// import { useEffect, useState } from 'react';
import { HeaderUserButton, HeaderUserWrapper } from './UserBar.styled';
import userAvatar from './images/default.jpg';

const UserBar = ({name='User', avatarUrl = userAvatar}) => {

//   const [showUserMenu, setShowUserMenu] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [statusModal, setStatusModal] = useState('');


    return (
        <HeaderUserWrapper>
            <HeaderUserButton>
                <img src={avatarUrl} alt={name} />
                <p>{name }</p>
            </HeaderUserButton>
        </HeaderUserWrapper>
    )

}

export default UserBar