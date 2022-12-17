import React from 'react'
import './ServiceSection.css'


function BreadcrumbPath() {
  return (
    <div className='top-heading-breadcrumb-wrapper'>
        <div className='breadcrumb-container'>
        <hr />
            {/* lists subsections of page */}
            <ul itemProp='breadcrumb' itemScope itemType='http://schema.org/BreadcrumbList' 
            className='breadcrumbs'> 
                <li className='breadcrumbs-list' itemProp='itemListElement' 
                itemScope itemType='http://schema.org/ListItem'>
                    <a itemProp='item' href='/' title='Home'>
                        <span className='breadcrumbs-list-item' itemProp='name'>Home</span>
                    </a>
                </li>
                <li className='breadcrumbs-list' itemProp='itemListElement' 
                itemScope itemType='http://schema.org/ListItem'>
                    <span className='breadcrumbs-list-item' itemProp='item' title='Services'>Services</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default BreadcrumbPath