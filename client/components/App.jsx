import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Landmarks from './Landmarks'
import Region from './Regions'
import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    <>
    <div>
      <Route exact path="/" componenet={Home}/>
      <Route path="/regions/:name" component={Region}/>
    </div>
    </>
  )
}

export default App