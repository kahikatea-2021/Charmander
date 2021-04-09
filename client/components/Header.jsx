import React from 'react'

const logo = './images/gif.gif'


function Header() { 

  return (
    <div className='bg-green-300 flex-initial items-center'>
      <h1>Pokemon Regions Viewer</h1>
      <img src={logo} alt="loading..." />
    </div>
  ) 
}

export default Header
