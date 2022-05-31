import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/expenseform">Expense Form</NavLink>
      <NavLink to="/expenselist">Expense List</NavLink>
    </nav>
  )
}

export default NavBar