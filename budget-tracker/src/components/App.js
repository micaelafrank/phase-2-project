import React from 'react'
import Home from './Home'
import NavBar from './NavBar'
import ExpenseList from './ExpenseList'
import ExpenseForm from './ExpenseForm'
import { Switch, Route } from 'react-router-dom'
import '../App.css';

function App() {

  function onSubmitExpense(newExpense){
    console.log(newExpense)
  }
  
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route path="/expenseform">
          <ExpenseForm onSubmitExpense={onSubmitExpense}/>
        </Route>
        <Route path="/expenseList">
          <ExpenseList/>
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
