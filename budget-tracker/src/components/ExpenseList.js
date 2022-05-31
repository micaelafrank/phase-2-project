import React, { useState, useEffect } from 'react'
import ExpenseItem from './ExpenseItem'

function ExpenseList({expenses, deleteExpense}) {

  const [addedExpense, setAddedExpense] = useState(0);
  
  const listOfExpenses = expenses.map((expense) => (
    <ExpenseItem
    key={expense.id}
    id={expense.id}
    name={expense.name}
    image={expense.image}
    amount={expense.amount}
    category={expense.category}
    day={expense.day}
    deleteExpense={deleteExpense}
    />
  ))

  useEffect(()=>{
    const totalExpense = expenses.reduce((accumulator,expense)=>{
      return expense.amount+accumulator},0)
      setAddedExpense(totalExpense.toFixed(2))
    },[expenses])

  return (
    <div className="expenseContainer">
      <h1>Total spent for this month: ${addedExpense}</h1>
      <h2>Receipts:</h2>
          {listOfExpenses}
    </div>
  )
}

export default ExpenseList