import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginCheck } from '../redux/actions/index';

function LoginPage() {
    // const loginFlag = useSelector(state => state.loginFlag);
    const dispatch = useDispatch()
    const loginChecK = () => {
        dispatch(loginCheck(email, password));
        setEmail("")
        setPassword("")
    }
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className='LoginPage'>
            <p className='title'>Hospital Name</p>
            <div className='input-item'>
                <p>Email</p>
                <div className='input-box'>
                    <input type={"text"} value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
            </div>
            <div className='input-item'>
                <p>Password</p>
                <div className='input-box'>
                    <input type={"password"} value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>
            </div>
            <div className='button' onClick={loginChecK}>LOGIN</div>
            <p className='forgot-password'><u>Forgot your password?</u></p>
        </div>
    )
}

export default LoginPage