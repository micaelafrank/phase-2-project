import React, { useState, useEffect } from 'react'

function Payday({paychecks, deleteExpense}) {
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
    isSplit={expense.isSplit}
    payday={expense.payday}
    deleteExpense={deleteExpense}
    handleSearch={setUserSearch}
    handleSplitPrice={handleSplitPrice}
    />
  ))

  useEffect(()=>{
    const totalExpense = expenses.reduce((accumulator,expense)=>{
      return expense.amount+accumulator},0)
      setAddedExpense(totalExpense.toFixed(2))
    },[expenses])

  return (
      <div className="expenseContainer">
        <h1 className='totalMoney'>Total money spent this month: ${addedExpense}</h1>
        <h2 className="receipts">Receipts:</h2>
          {listOfExpenses}
      </div>
  )
}

export default ExpenseList