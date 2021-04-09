import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Landmarks from './Landmarks'
import Regions from './Regions'
import Header from './Header'
import Footer from './Footer'

import Nav from './Nav'

function App() {
  return (
    <>
    <div className='bg-pink-400'>
      <div>
        <Header/>
      </div>
      <div className='bg-green-400 flex grid-cols-2'>
      <Route path='/' component={Nav} />
        <Home />      
      </div>
      <div className='bg-pink-400 flex flex-col items-center'>
        <Footer />
      </div>
    </div>
    </>
  )
}

export default App