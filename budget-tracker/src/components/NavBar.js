import React from 'react'
import { NavLink } from 'react-router-dom'
import MoneyIcon from './MoneyIcon'

function NavBar() {
  return (
    <div className='nav-bar'>
      <MoneyIcon />
      <h1 className='app-name'>Budget Tracker by Flatiron Students</h1>
      <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/expenseform">Expense Form</NavLink>
        <NavLink to="/expenselist">Expense List</NavLink>
      </nav>
    </div>
  )
}

export default NavBar