import React from 'react'
import { NavLink } from 'react-router-dom'

import './styles.css'

export default function Navbar({}) {
  return <nav>
    <NavLink exact to={`/`}>Home</NavLink> | <NavLink to={`/products`}>Products</NavLink> | <NavLink exact to={`/about-us`}>About us</NavLink>
  </nav>
}