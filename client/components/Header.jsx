import React from 'react'
import Title from './Title'
import logo from '../../server'
import { Link } from 'react-router-dom'



function Header() { 
  return (
    <div>
      <Title />
      <logo />
    </div>
  ) 
}
