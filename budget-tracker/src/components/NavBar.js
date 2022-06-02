import React from 'react'
import { NavLink } from 'react-router-dom'
import Coins from './Coins'
function NavBar() {
  return (
    <div className='nav-bar'>
      <div className="headerContainer">
        <h1 className='app-name'>Budget</h1>
        <Coins/>
        <h1 className="app-name">Tracker</h1>
      </div>
      <h2 className='subtitle'style={{ textAlign:"center" }}>Helping you save money for a rainy day</h2>
      <h2 className='subtitle2'style={{ textAlign:"center" }}>This month's forecast: Make it rain</h2>
      <nav style={{ textAlign:"center" }}>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/expenseform">Add Expense</NavLink>
        <NavLink to="/expenselist">View All Expenses</NavLink>
      </nav>
    </div>
  )
}
export default NavBar