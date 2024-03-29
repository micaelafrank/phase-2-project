import React, { useState, useEffect } from 'react'
import ExpenseItem from './ExpenseItem'
import { NavLink } from 'react-router-dom';

function ExpenseList({expenses, deleteExpense, setUserSearch, handleSplitPrice, total, search}) {
  const [addedExpense, setAddedExpense] = useState(0); 
  const [searchExpense, setSearchExpense] = useState(0);
  
  const listOfExpenses = expenses.map((expense) => (
    <ExpenseItem
    key={expense.id}
    id={expense.id}
    name={expense.name}
    image={expense.image}
    amount={expense.amount}
    category={expense.category}
    day={expense.day}
    expenses={expenses}
    isSplit={expense.isSplit}
    payday={expense.payday}
    deleteExpense={deleteExpense}
    handleSearch={setUserSearch}
    handleSplitPrice={handleSplitPrice}
    />
  ))

  useEffect(()=>{
    window.scrollTo(0,0);
  }, []);

  useEffect(()=>{
    const totalExpense = expenses.reduce((accumulator,expense)=>{
      return expense.amount<0?accumulator:expense.amount+accumulator},0)
      setAddedExpense(totalExpense.toFixed(2))
    },[expenses])

    useEffect(()=>{
      const sExpense = expenses.reduce((accumulator,expense)=>{
        return expense.amount<0?accumulator:expense.amount+accumulator},0)
        setSearchExpense(sExpense.toFixed(2))
      },[expenses])

  return (
    <>
      <div className='expenses'>
        <div className="expenseContainer">
        <h2 className="app-name2">Receipts:</h2>
        <h2 className='totalMoney' style={{ textShadow:"2px 2px solid #afff63", marginBottom: "10px" }}>TOTAL MONEY SPENT THIS MONTH: ${addedExpense}</h2>
          {search === "" ? null : <h1 className='totalMoney'><i>{search.toUpperCase()}</i>: ${searchExpense}</h1>}
        {listOfExpenses}
     <nav style={{ textAlign:"center", alignItems:"center", marginLeft:"auto", marginRight:"auto"}}className="homeNav">
      <NavLink style={{ textAlign:"center", alignItems:"center"}} className='link-button' exact to="/">Return to homepage</NavLink>
    </nav>
  </div>
  </div>
  </>
  )
}

export default ExpenseList