import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import { setConditionId, addNewUser } from '../redux/actions/index';
import axios from 'axios';

function MenuPage() {
  const nowUser = useSelector(state => state.nowUser);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const setConditionID = (id) => {
    dispatch(setConditionId(id));
  }
  const addNewUseR = (firstName, lastName, email, password, userType) => {
    dispatch(addNewUser(firstName, lastName, email, password, userType));
  }
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userType, setUserType] = useState('stuff')
  switch (nowUser.userType) {
    case 'admin':
      return (
        <div className='MenuPage'>
          <Header />
          <div className='main'>
            <p className='title'>Create a new user</p>
            <div className='input-item'>
              <p>First Name</p>
              <div className='input-box'>
                <input type={"text"} value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
              </div>
            </div>
            <div className='input-item'>
              <p>Last Name</p>
              <div className='input-box'>
                <input type={"text"} value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
              </div>
            </div>
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
            <div className='input-item'>
              <p>Login</p>
              <div className='input-box'>
                <select value={userType} onChange={(e) => { setUserType(e.target.value) }} >
                  <option>stuff</option>
                  <option>nurse</option>
                  <option>admin</option>
                </select>
              </div>
            </div>
            <div className='button' onClick={() => {
              if(firstName!=='' || lastName!=='' || email!=='' || password!==''){
                addNewUseR(firstName, lastName, email, password, userType)
                const userObject = {
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  password: password,
                  userType: userType
                };
                axios.post('http://localhost:4000/hospital/create-user', userObject)
                  .then(res => console.log(res.data));
                setFirstName('')
                setLastName('')
                setEmail('')
                setPassword('')
                setUserType('')
              }
            }}>CREATE A NEW USER</div>
          </div>
        </div>
      )
    case 'nurse':
      return (
        <div className='MenuPage'>
          <Header />
          <div className='main'>
            <p className='title'>GOOD ATFERNOON</p>
            <div className='button' onClick={() => {
              setConditionID(0)
              navigate('/clinical-studies')
            }}>ALL CLINICAL STUDIES</div>
            <div className='button' onClick={() => {
              setConditionID(1)
              navigate('/trial-organisations')
            }}>ALL TRIAL ORGANIZATIONS</div>
          </div>
        </div>
      )
    case 'stuff':
      return (
        <div className='MenuPage'>
          <Header />
          <div className='main'>
            <p className='title'>GOOD AFTERNOON</p>
            <div className='button' onClick={() => {
              setConditionID(0)
              navigate('/clinical-studies')
            }}>ALL CLINICAL STUDIES</div>
            <div className='button' onClick={() => {
              setConditionID(1)
              navigate('/trial-organisations')
            }}>ALL TRIAL ORGANIZATIONS</div>
          </div>
        </div>
      )
    default:
      return
  }
}

export default MenuPage