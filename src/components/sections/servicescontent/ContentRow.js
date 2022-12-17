import React from 'react'
import './ServiceSection.css'

function ContentRow() {
  return (
    <div className='content-row'>
        <main className='row-main'>
            <article className='row-main-article'>
                <div className='row-main-top-panel'>
                    {/* This is the title */}
                    <h1>hi</h1>
                </div>
                <div className='row-main-bottom-panel'>
                    {/* This bottom panel of article*/}
                    <h2>hey</h2>
                </div>
            </article>
        </main>
        {/* This separates the main and sidebar on the content-row */}
        <div className='sidebar-wrapper'>
            <div className='sidebar'>
                <ul className='sidebar-list'>
                    <li className='sidebar-list-item'>
                        <a className='.sidebar-list-item-link' href='/about'>
                            Our misson
                        </a>
                    </li>
                    <li className='sidebar-list-item'>
                        <a className='.sidebar-list-item-link' href='/quran-program'>
                            Quran Program
                        </a>
                    </li>
                    <li className='sidebar-list-item'>
                        <a className='.sidebar-list-item-link' href='/community'>
                            Community Outreach
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ContentRow