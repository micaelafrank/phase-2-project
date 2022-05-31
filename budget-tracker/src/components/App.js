import React, { useState, useEffect } from 'react'
import Home from './Home'
import NavBar from './NavBar'
import ExpenseList from './ExpenseList'
import ExpenseForm from './ExpenseForm'
import { Switch, Route } from 'react-router-dom'
import '../App.css';

function App() {

  const [expenses, setExpenses] = useState([]);
  function onSubmitExpense(newExpense){
    console.log(newExpense)
  }

  useEffect(() => {
    fetch("http://localhost:4000/expenses")
    .then(res => res.json())
    .then(data=> setExpenses(data))}, [])
  
    function deleteExpense(id){
      const updatedList = expenses.filter((expense) => expense.id !== id);
      setExpenses(updatedList);
    }

  return (
    <div>
      <NavBar/>
      <Switch>
        <Route path="/expenseform">
          <ExpenseForm onSubmitExpense={onSubmitExpense}/>
        </Route>
        <Route path="/expenseList">
          <ExpenseList deleteExpense={deleteExpense} expenses={expenses} setExpenses={setExpenses} />
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
