import React from 'react'
import { useParams } from 'react-router-dom'

import regions from '../../data/regions'

function Region(props) {
    const { name } = useParams()
    const { theRegion } = regions[name]
  return (
    <div>
        <h2>{name}</h2>
        <img src= {`images/${images/theRegion.image}`} />
    </div>
  )
}

export default Region