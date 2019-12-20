import React, { Component } from 'react'
import './Menu.scss'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuItems from './menuItems/MenuItems';

class Menu extends Component {
  render () {
    return (
      <div className='menu'>
        <div className='user-details'>
          <span className='logo'>OUR LOGO</span>
          <FontAwesomeIcon icon={faUser} className='icon' size="3x" />
          <MenuItems />
        </div>
      </div>
    )
  }
}

export default Menu
