import React from 'react';

function ExpenseItem({name, image, amount, category, id, day, deleteExpense}){

  function handleDelete(){
    fetch(`http://localhost:4000/expenses/${id}`,{
      method: "DELETE",
    })
    deleteExpense(id);
  }

  return (
      <div className="expense">
        <h2 className="expenseName">{name}</h2>
        <p className="expensePurchaseDate">Purchased on {new Date().toLocaleString("en-US", { month: "long" })} {day}</p>
        <p className='expensePrice'>Total: ${amount.toFixed(2)}</p>
        <img className="expenseImage" src={image} alt={name}/>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleSplit}>Split cost</button>
        <p className='expenseCategory'>{category.toUpperCase()}</p>
      </div>
  );

  }

export default ExpenseItem;