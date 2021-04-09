import React from 'react'

const homeImage = "/images/LGPE_Walking_Pokémon.png"

function Home() {
  return (
    <div className='flex flex-col items-center bg-green-400'>
      <img className='w-5/12' src={homeImage} />
    </div>
  )
}

export default Home