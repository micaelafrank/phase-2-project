import React from 'react'
import { NavLink } from 'react-router-dom'
import Coins from './Coins'

function NavBar() {


  return (
    <div className='nav-bar'>
      <div className='flexNav'>
        {/* <div className="headerCircle">
          <div className="headerContainer">
            <h3 style={{ marginTop:"0", alignItems:"center", textAlign:"center" }} className='app-name'>Make It Rain</h3>
            <p className="app-subtitle tracker">BUDGET TRACKER</p> */}
          {/* <div style={{flexDirection:"column", alignItems:"center", justifyContent:"center"}}> */}
          <div style={{width:"20%"}}>
            <div className="coins-container">
              <h2 className='subtitle2' style={{ textAlign: "left", fontSize: "21px", textShadow: "1px 1px black" }}>THIS MONTH'S FORECAST:<br></br><span style={{ fontSize: "28px", letterSpacing: "5px", textShadow: "2px 2px black" }}>MAKE IT RAIN</span></h2>
              <img style={{justifyContent:"center", alignItems:"center", width:"40%"}} 
              src="https://i.ibb.co/ScqSY2Y/4c108302aefc533f37134b18646c90a5-4.png"
               />
            </div>
          </div>
            {/* <div className='subtitles'>
              <h2 className='subtitle'style={{ textAlign:"center" }}>HELPING YOU SAVE MONEY FOR A RAINY DAY</h2> */}
            {/* </div> */}
          {/* </div> */}
          <div className="headerCircle" style={{ alignItems: "center", textAlign: "center", justifyContent: "center" }}>
          <div className="headerContainer" style={{ width:"100%", alignItems: "center", textAlign: "center", justifyContent:"center" }}>
            <h3 style={{ alignItems: "center", textAlign: "center" }} className='app-name'>Make It Rain</h3>
            <p className="app-subtitle tracker">BUDGET TRACKER</p>
            <h2 className='subtitle' style={{ letterSpacing:"1.1px" }}>HELPING YOU SAVE MONEY FOR A RAINY DAY</h2>
          </div>
          </div>
          {/* <form className="new-form homepageForm" onSubmit={handleSubmit}>
            <h4 className="formText" style={{ textAlign: "center", color:"white", fontFamily:"Roboto Condensed", lineSpacing:"10" }}>Enter your budget for this month:</h4>
            <input className="homepageBudget" placeholder="Enter dollar amount" type="number" value={budget.amount} onChange={handleChange}/>
            <input className="homepageBudget" type="submit"/>
          </form> */}
        <nav className="navBarLinksHomepage" style={{width:"30%"}}>
          <NavLink className="border" to="home">Home</NavLink>
          <NavLink className="border" to="expenseform">Add Expense/Paycheck</NavLink>
          <NavLink className="border" to="expenselist">View All Expenses</NavLink>
        </nav>
        </div>
      </div>
  )
}
export default NavBar