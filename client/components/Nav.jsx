import React from 'react'
import { Link } from 'react-router-dom'

import regionsData from '../../data/regions'

function Nav (props) {
    const url = props.location.pathname
    return (
        <div className='mt-9 ml-9'>
          <h2 className='text-3xl'>Regions Navigator</h2>
          <ul>
            <li className='text-xl'><Link to='/'>Home</Link></li>
          </ul>
          <ul className='text-xl'>
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