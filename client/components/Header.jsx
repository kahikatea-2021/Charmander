import React from 'react'
import Title from './Title'
// import logo from '../../server/public/images/logo.gif'
const logo = './images/logo.gif'


function Header() { 

  return (
    <div>
      <Title />
      <img src={logo} alt="loading..." />
    </div>
  ) 
}

export default Header
