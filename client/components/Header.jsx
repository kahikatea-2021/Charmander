import React from 'react'

const logo = './images/gif.gif'


function Header() { 

  return (
    <div className='bg-pink-400 flex'>      
      <img className='object-right rounded-full flex flex-col items-center' src={logo} alt="loading..." />
      <h1 className='flex-col items-right text-7xl'>Pokemon Regions</h1>
    </div>
  ) 
}

export default Header
