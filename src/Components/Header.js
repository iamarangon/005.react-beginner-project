import React from 'react'
import logo from './logo.svg'

const Header = () => {
  return (
    <header className='App-header'>
      <label>
        <img src={logo} className='App-logo'alt='logo' />
      </label>
      <label>
        <p>Beginner React Project</p>
        <p>Color Changer</p>
      </label>
    </header>
  )
}

export default Header