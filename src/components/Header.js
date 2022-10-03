import React from 'react'
import { ReactComponent as UserIcon } from "../assets/user.svg";
import { useSelector } from 'react-redux';

function Header() {
    const nowUserName = useSelector(state => state.nowUser.email);
    return (
        <div className='header'>
            <p className='center'>Hospital Name</p>
            <div className='right'>
                <p>{nowUserName}</p>
                <UserIcon />
            </div>
        </div>
    )
}

export default Header