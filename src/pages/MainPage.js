import React from 'react'
import { ReactComponent as UserIcon } from "../assets/user.svg";

function MainPage() {
  return (
    <div className='MainPage'>
      <div className='header'>
        <p className='center'>Hospital Name</p>
        <div className='right'>
          <p>David</p>
          <UserIcon />
        </div>
        </div>
    </div>
  )
}

export default MainPage