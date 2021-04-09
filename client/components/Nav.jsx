import React from 'react'
import { Link } from 'react-router-dom'

import regionsData from '../../data/regions'

function Nav (props) {
    const regions = Object.keys(regionsData)
    const url = props.location.pathname
    return (
        <div>
          <h2>Regions Navigator</h2>
          <ul>
            <li><Link to='/'>Home</Link></li>
          </ul>
          <ul>
            {regionsData.map((region) => {
              return <li key={region.id} className={url.includes(region.name) ? 'selected' : ''}>
                <Link to={`/region/${region.name}`}>{region.name}</Link>
              </li>
            })}
          </ul>
        </div>
      )
    }
   
export default Nav    