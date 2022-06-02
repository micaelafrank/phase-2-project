import React from 'react'
import { NavLink } from 'react-router-dom'
import MoneyIcon from './MoneyIcon'
import Coins from './Coins'

function NavBar() {
  return (
    <div className='nav-bar'>
      {/* <MoneyIcon /> */}
      <Coins/>
      <h1 className='app-name'>Budget Tracker</h1>
      <h2 className='subtitle'style={{ textAlign:"center" }}>Helping you save money for a rainy day</h2>
      <h2 className='subtitle2'style={{ textAlign:"center" }}>This month's forecast: Make it rain</h2>
      <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/expenseform">Expense Form</NavLink>
        <NavLink to="/expenselist">Expense List</NavLink>
      </nav>
    </div>
  )
}

export default NavBar