import React, { useState } from 'react'
import { ReactComponent as UserIcon } from "../assets/user.svg";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/index';
import { useNavigate } from 'react-router-dom';

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const nowUser = useSelector(state => state.nowUser);
    const [userHover, setUserHover] = useState(false)
    return (
        <div className='header'>
            <p className='center'>Hospital Name</p>
            <div className='right'  onMouseLeave={()=>setUserHover(false)}>
                <p>{nowUser?.email}</p>
                <UserIcon onClick={()=>setUserHover(true)}/>
                <div className={userHover?'dropdown-menu':'hidden'}>
                    <p>{nowUser?.email}</p>
                    <p>User Type : {nowUser?.userType}</p>
                    <div className='horizontal-line'></div>
                    <p className='hover-pointer'>Profile</p>
                    <p className='hover-pointer' onClick={()=>{
                        dispatch(logout());
                        navigate('/login')
                    }}>Log out</p>
                </div>
            </div>
        </div>
    )
}

export default Header