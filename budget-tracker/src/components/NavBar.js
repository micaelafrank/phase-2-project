import React from 'react'
import { NavLink } from 'react-router-dom'
import Coins from './Coins'

function NavBar() {
  return (
    <div className='nav-bar'>
      <div className="headerContainer">
        <h1 style={{ marginTop:"0" }} className='app-name'>Budget</h1>
        <h1 className="app-name">Tracker</h1>
        <Coins/>
      </div>
      <h2 className='subtitle'style={{ textAlign:"center" }}>HELPING YOU SAVE MONEY FOR A RAINY DAY</h2>
      <h2 className='subtitle2'style={{ textAlign:"center" }}>THIS MONTH'S FORECAST: MAKE IT RAIN</h2>
      <nav style={{ textAlign:"center" }}>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/expenseform">Add Expense/Paycheck</NavLink>
        <NavLink to="/expenselist">View All Expenses</NavLink>
      </nav>
    </div>
  )
}
export default NavBar