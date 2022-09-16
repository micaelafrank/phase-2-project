import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import Coins from './Coins'

function NavBar() {
  const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
  // const [budget, setBudget] = useState({amount:""})
  // const [displayBudget, setDisplayBudget] = useState(0)
  // const [addedExpense, setAddedExpense] = useState(0);
  // const [addedPaychecks, setAddedPaychecks] = useState(0);

  // function handleSubmit(e){
  //   e.preventDefault()
  //   fetch(`http://localhost:4000/budget/1`,{
  //     method:"PATCH",
  //     headers:{
  //       "Content-Type":"application/json"
  //     },
  //     body:JSON.stringify(budget),
  //   })
  //       .then(res=>res.json())
  //       .then(data=>setDisplayBudget(data.amount))
  //   setBudget({amount:""})
  // }

  // function handleChange(e){
  //   let value = parseFloat(e.target.value)
  //   setBudget((budget)=>({...budget,"amount":value}))
  // }

  // useEffect(()=>{
  //   window.scrollTo(0, 0);
  // }, ["/"]);

  // useEffect(()=>{
  //   const totalExpense = expenses.reduce((accumulator,expense)=>{
  //     return expense.amount<0?accumulator:expense.amount+accumulator},0)
  //     setAddedExpense(totalExpense.toFixed(2))
  //   },[expenses])

  //   useEffect(()=>{
  //     const totalEarnings = expenses.reduce((accumulator,expense)=>{
  //       return expense.amount>0?accumulator:expense.amount+accumulator},0)
  //       setAddedPaychecks(totalEarnings.toFixed(2))
  //     },[expenses])
    
  // useEffect(()=>{
  //   fetch(`http://localhost:4000/budget/1`)
  //     .then(res=>res.json())
  //     .then(data=>setDisplayBudget(data.amount))
  // },[])

  return (
    <div className='nav-bar'>
      <div className='flexNav'>
        <div className="headerCircle">
          <div className="headerContainer">
            <h1 style={{ marginTop:"0" }} className='app-name'>Budget</h1>
            <h1 className="app-name tracker">Tracker</h1>
            <div className='subtitles'>
              <h2 className='subtitle'style={{ textAlign:"center" }}>HELPING YOU SAVE MONEY FOR A RAINY DAY</h2>
              <h2 className='subtitle2'style={{ textAlign:"center" }}>THIS MONTH'S FORECAST:<br></br>MAKE IT RAIN</h2>
            </div>
          </div>
        </div>
        <Coins/>
          {/* <form className="new-form homepageForm" onSubmit={handleSubmit}>
            <h4 className="formText" style={{ textAlign: "center", color:"white", fontFamily:"Roboto Condensed", lineSpacing:"10" }}>Enter your budget for this month:</h4>
            <input className="homepageBudget" placeholder="Enter dollar amount" type="number" value={budget.amount} onChange={handleChange}/>
            <input className="homepageBudget" type="submit"/>
          </form> */}
        <nav className="navBarLinksHomepage">
          <NavLink className="border" exact to="/">Home</NavLink>
          <NavLink className="border" to="/expenseform">Add Expense/Paycheck</NavLink>
          <NavLink className="border" to="/expenselist">View All Expenses</NavLink>
        </nav>
        </div>
      </div>
  )
}
export default NavBar