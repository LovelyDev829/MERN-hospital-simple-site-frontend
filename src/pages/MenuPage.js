import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'

function MenuPage() {
  const navigate = useNavigate();
  return (
    <div className='MenuPage'>
      <Header />
      <div className='main'>
        <p className='title'>Good Afternoon!</p>
        <div className='button' onClick={() => { navigate('/clinical-studies') }}>ALL CLINICAL STUDIES</div>
        <div className='button' onClick={() => { navigate('/trial-organisations') }}>ALL TRIAL ORGANIZATIONS</div>
      </div>
    </div>
  )
}

export default MenuPage