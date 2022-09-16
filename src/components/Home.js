import React, { useState, useEffect } from 'react'
import Table from './Table';
import { NavLink } from 'react-router-dom';

function Home({ expenses }) {
  const current = new Date();
  const date = `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`;
  const [budget, setBudget] = useState({ amount: 0 })
  const [displayBudget, setDisplayBudget] = useState(0)
  const [addedExpense, setAddedExpense] = useState(0);
  const [addedPaychecks, setAddedPaychecks] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, ["/"]);

  useEffect(() => {
    const totalExpense = expenses.reduce((accumulator, expense) => {
      return expense.amount < 0 ? accumulator : expense.amount + accumulator
    }, 0)
    setAddedExpense(totalExpense.toFixed(2))
  }, [expenses])

  useEffect(() => {
    const totalEarnings = expenses.reduce((accumulator, expense) => {
      return expense.amount > 0 ? accumulator : expense.amount + accumulator
    }, 0)
    setAddedPaychecks(totalEarnings.toFixed(2))
  }, [expenses])

  useEffect(() => {
    fetch(`http://localhost:4000/budget/1`)
      .then(res => res.json())
      .then(data => setDisplayBudget(data.amount))
  }, [])
  function handleChange(e) {
    let value = parseFloat(e.target.value)
    setBudget((budget) => ({ ...budget, "amount": value }))
  }
  console.log(budget)
  function handleSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:4000/budget/1`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(budget),
    })
      .then(res => res.json())
      .then(data => setDisplayBudget(data.amount))
    setBudget({ amount: "" })
  }
  let balance = <span className={(displayBudget + Math.abs(addedPaychecks) - addedExpense).toFixed(2) < 0 ? 'low-balance' : 'balance'}>{(displayBudget + Math.abs(addedPaychecks) - addedExpense).toFixed(2)}</span>
  return (
    <div id="home">
      <h1 style={{ fontFamily: "Open Sans", color: "black" }}>
        Tracking budget for: {new Date().toLocaleString("en-US", { month: "long" })} {new Date().getFullYear()}
      </h1>
      <h2 style={{ textAlign: "center", fontSize: "40px", fontWeight: "bold", fontFamily: "Roboto Condensed", color: "black" }}>{date}</h2>
      <form className="new-form homepageForm" onSubmit={handleSubmit}>
        <h4 className="formText" style={{ fontSize: "29px", textAlign: "center", color: "#323bb3", fontFamily: "Roboto Condensed", width: "400px" }}>Enter your budget for this month:</h4>
        <input className="homeFormInput" placeholder="Enter dollar amount" type="number" value={budget.amount} onChange={handleChange} />
        <input className="homeFormInput" type="submit" />
      </form>
      <h3 className="homepageMath">Your budget for {new Date().toLocaleString("en-US", { month: "long" })}: ${displayBudget}</h3>
      <h3 className="homepageMath">Your earnings for {new Date().toLocaleString("en-US", { month: "long" })}: ${Math.abs(addedPaychecks)}</h3>
      <h3 className="homepageMath">Your total spending in {new Date().toLocaleString("en-US", { month: "long" })} so far: ${addedExpense}</h3>
      <h3 className="homepageMath">Your remaining balance for {new Date().toLocaleString("en-US", { month: "long" })}: ${balance}</h3>
      <Table expenses={expenses} />
      <nav className="homeNav">
        <NavLink className='link-button' exact to="/expenseform">Add a new expense</NavLink>
        <NavLink className='link-button' exact to="/expenselist">See Purchases in Details</NavLink>
      </nav>
    </div>
  )
}
export default Home