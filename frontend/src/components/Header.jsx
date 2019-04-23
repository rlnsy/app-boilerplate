import React from 'react'
import {Link} from 'react-router-dom'

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <nav>
          <ul>
              <li> <Link to='/'> Home </Link></li>
              <li> <Link to='/other'> Other </Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}