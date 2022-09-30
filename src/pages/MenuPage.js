import React from 'react'
import { ReactComponent as UserIcon } from "../assets/user.svg";

function MenuPage() {
  return (
    <div className='MenuPage'>
      <div className='header'>
        <p className='center'>Hospital Name</p>
        <div className='right'>
          <p>David</p>
          <UserIcon />
        </div>
      </div>
      <div className='main'>
        <p className='title'>Good Afternoon!</p>
        <div className='button'>ALL CLINICAL STUDIES</div>
        <div className='button'>ALL TRIAL ORGANIZATIONS</div>
      </div>
    </div>
  )
}

export default MenuPage