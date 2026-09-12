import style from './userAvatar.module.scss'
import type { UserAvatarProps } from '../../types/componentProps/userAvatarProps'











const UserAvatar = ({ firstName }: UserAvatarProps) => {


    return (
        <main className={ style.userAvatar }>
            <p>{ firstName.trim().toUpperCase()[0] }</p>
            {/* <p>{ lastName?.trim().toUpperCase()[0] }</p> */}
        </main>
    )
}


export default UserAvatar