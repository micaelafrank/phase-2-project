import React, {useState,useEffect} from 'react'
import Table from './Table';
import { NavLink } from 'react-router-dom';

function Home({expenses}) {

  const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
  const [budget, setBudget] = useState({amount:""})
  const [displayBudget, setDisplayBudget] = useState(0)
  const [addedExpense, setAddedExpense] = useState(0);

  useEffect(()=>{
    const totalExpense = expenses.reduce((accumulator,expense)=>{
      return expense.amount+accumulator},0)
      setAddedExpense(totalExpense.toFixed(2))
    },[expenses])

  useEffect(()=>{
    fetch(`http://localhost:4000/budget/1`)
      .then(res=>res.json())
      .then(data=>setDisplayBudget(data.amount))
  },[])

  function handleChange(e){
    let value = parseFloat(e.target.value)
    setBudget((budget)=>({...budget,"amount":value}))
  }

//console.log(budget)
  function handleSubmit(e){
    e.preventDefault()
    fetch(`http://localhost:4000/budget/1`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(budget),
    })
        .then(res=>res.json())
        .then(data=>setDisplayBudget(data.amount))
    setBudget({amount:""})
  }
  let balance=<span className={(displayBudget-addedExpense).toFixed(2)<0?'low-balance':'balance'}>{(displayBudget-addedExpense).toFixed(2)}</span>
  return (
    <div id="home">
      {/* <Coins/> */}
      <h1 style={{ color: "firebrick", paddingTop: "10px" }}>
          Welcome to Budget Tracker for {new Date().toLocaleString("en-US", { month: "long" })} {new Date().getFullYear()}
      </h1>
      {/* <h2>{new Date().toLocaleString() + ""}</h2> */}
      <h2>{date}</h2>
      {/* <h3>Enter your budget for this month:</h3> */}
      <form className="new-form homepageForm" onSubmit={handleSubmit}>
        <h4 className="formText" style={{ textAlign: "center" }}>Enter your budget for this month:</h4>
        <input className="homepageBudget" placeholder="Enter dollar amount" type="number" value={budget.amount} onChange={handleChange}/>
        <input className="homepageBudget" type="submit"/>
      </form>
      <h3>Your budget for {new Date().toLocaleString("en-US", { month: "long" })}: ${displayBudget}</h3>
      <h3>Your total spending in {new Date().toLocaleString("en-US", { month: "long" })} so far: ${addedExpense}</h3>
      <h3>Your remaining balance for {new Date().toLocaleString("en-US", { month: "long" })}: ${balance}</h3>
      <Table expenses={expenses} />
      <nav className="homeNav">
            <NavLink className='link-button' exact to="/expenseform">Add a new expense</NavLink>
            <NavLink className='link-button'exact to="/expenselist">See Purchases in Details</NavLink>
      </nav>


    </div>
  )
}

export default Home