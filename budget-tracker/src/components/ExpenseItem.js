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
        <h2 className='expenseName'>{name}</h2>
        <p className='expensePrice'>Total: ${amount}</p>
        <img className="expenseImage"
          src={image}
          alt={name}
        />
        <p>Purchased on {new Date().toLocaleString("en-US", { month: "long" })} {day}</p>
        <p className='expenseCategory'>{category.toUpperCase()}</p>
        <button onClick={handleDelete}>Delete</button>
      </div>
  );

  }

export default ExpenseItem;