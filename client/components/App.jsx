import React from 'react'

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
        <Header />
        <Home />
        <Nav />
        <Footer />
      </div>
    </>
  )
}

export default App