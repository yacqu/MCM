import React from 'react'
import { SidebarComponent } from './SidebarComponent'
import { MainContentComponent } from './SidebarComponent'
import './ArticleComponent.css'

function ArticleComponent() {
  return (
    <>
        <div className='article-component-container'>
            <div className='article-component-main'>
                <MainContentComponent />
            </div>
            <div className='article-component-side'>
                <SidebarComponent />
            </div>
        </div>
        
    </>
  )
}

export default ArticleComponent