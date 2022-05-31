import React from 'react'
import ExpenseItem from './ExpenseItem'

function ExpenseList({expenses, deleteExpense}) {

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

  return (
    <div className="expenseContainer">
      <h1>Receipts:</h1>
          {listOfExpenses}
    </div>
  )
}

export default ExpenseList