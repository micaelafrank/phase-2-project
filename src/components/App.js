import React, { useState, useEffect } from 'react'
import Home from './Home'
import NavBar from './NavBar'
import ExpenseList from './ExpenseList'
import ExpenseForm from './ExpenseForm'
import { Switch, Route } from 'react-router-dom'
import Search from './Search'

function App() {
  const [search, setUserSearch] = useState("")
  const [expenses, setExpenses] = useState([])
  function onSubmitExpense(newExpense) {
    const updatedList = [...expenses, newExpense]
    setExpenses(updatedList)
  }

  const current = new Date();
  const date = `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`;


  useEffect(() => {
    fetch("http://localhost:4000/expenses")
      .then(res => res.json())
      .then(data => setExpenses(data))
  }, [])
  function deleteExpense(id) {
    const updatedList = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedList);
  }
  function handleSplitPrice(itemToSplit) {
    const updatedList = expenses.map((expense) => expense.id === itemToSplit.id ? itemToSplit : expense);
    setExpenses(updatedList);
  }
  const searchReceipts = expenses.filter((expense) => {
    return (expense.name.toLowerCase().includes(search.toLowerCase())) ||
      (expense.category.toLowerCase().includes(search.toLowerCase()))
  })
  return (
    <div>
      <NavBar date={date} />
      <Switch>
        <Route path="/expenseform">
          <ExpenseForm onSubmitExpense={onSubmitExpense} />
        </Route>
        <Route path="/expenseList">
          <Search search={search} handleSearch={setUserSearch} />
          <ExpenseList search={search} handleSplitPrice={handleSplitPrice} total={expenses} deleteExpense={deleteExpense} expenses={searchReceipts} setExpenses={setExpenses} />
        </Route>
        <Route exact path="/">
          <Home date={date} expenses={expenses} />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}
export default App;