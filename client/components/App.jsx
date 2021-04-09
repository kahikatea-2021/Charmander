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
    <div className='App'>
      <Header/>
      <Home />
      <Route path='/' component={Nav} />
      <Footer />
    </div>
    </>
  )
}

export default App