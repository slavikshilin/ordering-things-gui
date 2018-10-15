import React from 'react';
import PropTypes from 'prop-types'
import { Popover, Avatar } from 'antd';
import Mailto from './react-mailto';

const UserPopover = props => {
    const userInfo = ((props.userInfo) && (props.userInfo.user)) ? props.userInfo.user : {}

    const content = (
        <div>
            <p>Имя: {userInfo.displayName}</p>
            <p>Email: &nbsp;
            <Mailto email={userInfo.email} >
                    {userInfo.email}
                </Mailto>
            </p>
        </div>
    )

    return (
        <Popover placement="bottomRight" content={content} title="Данные пользователя">
            <span className="auth-link auth-link-logged">
                <Avatar size={64} id="avatar" src={userInfo.photoURL} />
            </span>
        </Popover>
    )
}

UserPopover.propTypes = {
    userInfo: PropTypes.any
}

export default UserPopover  