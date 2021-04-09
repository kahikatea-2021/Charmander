import React from 'react'
import Title from './Title'

const logo = './images/gif.gif'


function Header() { 

  return (
    <div>
      <Title />
      <img src={logo} alt="loading..." />
    </div>
  ) 
}

export default Header
