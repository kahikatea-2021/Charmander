import React from 'react'
import { Link } from 'react-router-dom'

import regionsData from '../../data/regions'

function Nav (props) {
    const regions = Object.keys(regionsData)

    return (
        <div>
          <h2>Regions Navigator</h2>
          <ul>
            <li><Link to='/'>Home</Link></li>
          </ul>
          <ul>
            {regionsData.map((name, i) => {
              return <li key={i} className={url.includes(name) ? 'selected' : ''}>
                <Link to={`/region/${name}`}>{name}</Link>
              </li>
            })}
          </ul>
        </div>
      )
    }
   
export default Nav    