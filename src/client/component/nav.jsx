// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  HOME_ROUTE,
  HELLO_ROUTE,
  NOT_FOUND_ROUTE,
} from '../../shared/routes'

const Nav = () =>
  <nav>
    <ul>
      {[
        { route: HOME_ROUTE, label: 'Home' },
        { route: HELLO_ROUTE, label: 'Say Hello' },
        { route: NOT_FOUND_ROUTE, label: '404 Demo' },
      ].map(link => (
        <li key={link.route}>
          <NavLink to={link.route} activeStyle={{ color: 'limegreen' }} exact>{link.label}</NavLink>
        </li>
      ))}
    </ul>
  </nav>

export default Nav
