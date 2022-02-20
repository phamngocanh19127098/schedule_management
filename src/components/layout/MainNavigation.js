import React from 'react'
import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'
export default function MainNavigation() {
  return (
      <header className={classes.header}>
          <div className={classes.logo}>
              React Meetups
          </div>
          <nav>
          <ul>
            <li>
                <Link to='/'>All Meet Up</Link>
            </li>  
            <li>
                <Link to='/new-meetup'>Add New meetup</Link>
            </li>  
            <li>
                <Link to='/favorite'>My favorite</Link>
            </li>  
            </ul>
          </nav>
      </header>
     
  )
}
