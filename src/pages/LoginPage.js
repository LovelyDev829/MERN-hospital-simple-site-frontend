import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/index';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
    const loginFlag = useSelector(state => state.loginFlag);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const logiN = () => {
        axios.post('http://localhost:4000/user/check-user', { email: email, password: password })
            .then(res => {
                console.log("check-user", res.data)
                if (res.data[0]) {
                    dispatch(login(res.data[0]));
                    setEmail("")
                    setPassword("")
                }
            })
            .catch((error) => {
                alert("Wrong Login Info...")
            })
    }
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    useEffect(() => {
        if (loginFlag) navigate('/menu');
    })
    return (
        <div className='LoginPage'>
            <p className='title'>Hospital Name</p>
            {/* <p className='title'>Message me on Whatsapp (+12762601724)</p> */}
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
            <div className='button' onClick={logiN}>LOGIN</div>
            <p className='forgot-password'><u>Forgot your password?</u></p>
        </div>
    )
}

export default LoginPage