import React, { Component } from 'react'
import './MenuItems.scss'
import { Link } from 'react-router-dom'

const MENU_ITEMS = [
  {
    name: 'CASINO',
    id: 'casino',
    url: 'casino'
  },
  {
    name: 'LIVE CASINO',
    id: 'livecasino',
    url: 'live-casino'
  },
  {
    name: 'PROMOTIONS',
    id: 'promotions',
    url: 'promotions'
  }
]

class MenuItems extends Component {
  constructor (props) {
    super(props)

    this.selectMenuItem = this.selectMenuItem.bind(this)
    this.state = {
      selectedItem: MENU_ITEMS[0].id
    }
  }

  selectMenuItem (e) {
    this.setState({
      selectedItem: e.target.id
    })
  }

  render () {
    const { selectedItem } = this.state

    return (
      <div className='menu-items'>
        <div className='user-details'>
          <ul>
            {MENU_ITEMS.map((item) => {
              return (
                <Link key={item.id} id={item.id} to={`/${item.url}`}>
                  <li className={item.id === selectedItem ? 'active' : 'default'}>
                    {item.name}
                  </li>
                </Link>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default MenuItems
