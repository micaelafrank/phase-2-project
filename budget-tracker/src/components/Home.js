import React, {useState,useEffect} from 'react'
import BorderGif from './BorderGif';
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
      <BorderGif/>
      <h1 style={{ color: "firebrick" }}>
          Welcome To Budget Tracker For "{new Date().toLocaleString("en-US", { month: "long" })} {new Date().getFullYear()}"
      </h1>
      {/* <h2>{new Date().toLocaleString() + ""}</h2> */}
      <h2>{date}</h2>
      <form className="new-form" onSubmit={handleSubmit}>
        <input placeholder="Enter Budget Amount.." type="number" value={budget.amount} onChange={handleChange}/>
        <input type="submit"/>
      </form>
      <h2>Your Budget for {new Date().toLocaleString("en-US", { month: "long" })}: $ {displayBudget}</h2>
      <h2>Your Total Expense for {new Date().toLocaleString("en-US", { month: "long" })}: $ {addedExpense}</h2>
      <h2>Your Remaining Balance for {new Date().toLocaleString("en-US", { month: "long" })}: $ {balance}</h2>
      <Table expenses={expenses} />
      <nav>
            <NavLink className='link-button' exact to="/expenseform">Add a new expense</NavLink>
            <NavLink className='link-button'exact to="/expenselist">See Purchases in Details</NavLink>
      </nav>


    </div>
  )
}

export default Home