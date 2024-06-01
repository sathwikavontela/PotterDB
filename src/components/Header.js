import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="Navbar">
      <div>
        <img
          src="https://shopharrypottermerch.com/wp-content/uploads/2023/02/cropped-Harry-Potter-Merch-logo-2.png"
          alt="harrypotter-logo"
          className="NavLogo"
        />
      </div>
      <div>
        <ul className="NavItemContainer">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <li>Home</li>
          </Link>
          <Link to="/books/" style={{ textDecoration: 'none' }}>
            <li>Books</li>
          </Link>
          <Link to="/characters/" style={{ textDecoration: 'none' }}>
            {' '}
            <li>Characters</li>
          </Link>
          <Link to="/movies/" style={{ textDecoration: 'none' }}>
            {' '}
            <li>Movies</li>
          </Link>
          <Link to="/potions/" style={{ textDecoration: 'none' }}>
            {' '}
            <li>Potions</li>
          </Link>
          <Link to="/spells/" style={{ textDecoration: 'none' }}>
            <li>Spells</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Header
