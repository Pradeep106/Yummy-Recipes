import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
           <Link><li>Yummy Recipes</li></Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header
