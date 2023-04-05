import { EditBtn, LogoutBtn, ModalBox } from "./HeaderUserModal.styled";
import  sprite  from '../../../images/sprite.svg';

const HeaderUserModal = () => {
    return (
        <ModalBox>
            <EditBtn type='button'  >
                <span>Edit profile</span>
                <svg>
                    <use href={ sprite + `#edit`}/>
                </svg>
            </EditBtn>
            <LogoutBtn>
                <span>Logout</span>
                <svg>
                    <use href={ sprite + `#arrow-right`}/>
                </svg>
                </LogoutBtn>
        </ModalBox>
    )
}

export default HeaderUserModal;