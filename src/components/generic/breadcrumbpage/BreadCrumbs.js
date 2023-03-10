import React from 'react'
import BreadCrumbItem from './BreadCrumbItem'

import './BreadCrumbs.css'

function BreadCrumbs() {
  return (
    <div className='bc-top-wrapper'>
      <div className='bc-wrapper'>
          <div className='bc-container'>
            <ul className='bc-list-ul'>
              <li className='bc-list-li' >
                <a className='bc-list-ul-a' href='/'>{/* insert origin */}
                  Home
                </a>
              </li>

              <li className='bc-list-li'> {/* copy breadcrumb from here */}
                <BreadCrumbItem link='/' title='Crumb 1' />
              </li>{/* copy breadcrumb to here */}
              
              <li className='bc-list-li'> 
                <BreadCrumbItem link='/' title='Crumb 1' />
              </li>

            </ul>

          </div>
      </div>
    </div>
  )
}

export default BreadCrumbs