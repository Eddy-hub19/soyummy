import { createPortal } from 'react-dom';
import EditProfileModal from './EditProfileModal/EditProfileModal';
import LogOutModal from './LogOutModal/LogOutModal';

const modalRoot = document.querySelector('#modal-root');


const HeaderProfileLogOutModel = ({status, name, avatarUrl, openUserModal }) => {
    return createPortal(
        <div>
            <div status={status}>
                <div></div>
                {status === 'edit' && (<EditProfileModal />)}
                {status === 'logout' && (<LogOutModal/>)}

            </div>
        </div>
        ,
        modalRoot
    );
}

export default HeaderProfileLogOutModel