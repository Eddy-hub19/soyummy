// import { useEffect, useState } from 'react';
import { HeaderUserButton, HeaderUserWrapper } from './UserBar.styled';
import userAvatar from '../../../images/default.jpg';
import { useState } from 'react';
import HeaderUserModal from '../HeaderUserModal/HeaderUserModal';

const UserBar = ({ name = 'User', avatarUrl = userAvatar }) => {

    const [openUserMenu, setOpenUserMenu] = useState(false);


//   const [showUserMenu, setShowUserMenu] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [statusModal, setStatusModal] = useState('');


    return (
        <><HeaderUserWrapper>
            <HeaderUserButton>
                <img src={avatarUrl} alt={name} />
                <p>{name}</p>
            </HeaderUserButton>
        </HeaderUserWrapper>
            <HeaderUserModal />
        </>
    )

}

export default UserBar