import React from 'react'
import './ServiceSection.css'
import BreadcrumbPath from './BreadcrumbPath'
import ContentRow from './ContentRow'

function ServiceSection() {
  return (
    <div className='main-content'>
      <div className='top-heading'>
        <div className='top-heading-container'>
          <h1 className='top-heading-container-title'>
            Enter Title Here
          </h1>
        </div>
        {/* The next portion of the services page goes here */}
        <BreadcrumbPath />
      </div>
      <div className='site-content-container'>
        {/* The content portion of the services page goes here */}
        <ContentRow />
        
      </div>{/* The page ends here */}        
    </div>
  )
}

export default ServiceSection