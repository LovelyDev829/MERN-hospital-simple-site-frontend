import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import { setConditionId } from '../redux/actions/index';

function MenuPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const setConditionID = (id) => {
    dispatch(setConditionId(id));
  }
  return (
    <div className='MenuPage'>
      <Header />
      <div className='main'>
        <p className='title'>Good Afternoon!</p>
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
}

export default MenuPage