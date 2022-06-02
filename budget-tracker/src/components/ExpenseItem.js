import React from 'react';

function ExpenseItem({name, image, amount, category, id, day, isSplit, deleteExpense, handleSplitPrice, handleUndoSplit}){
    function toggleSplitPrice(){
      const splitPrice = {
        amount: isSplit? amount * 2 : amount / 2,
        isSplit: !isSplit,
      };
      fetch(`http://localhost:4000/expenses/${id}`,{
        method: "PATCH",
        headers: {"Content-Type":"application/json" },
        body: JSON.stringify(splitPrice),
      })
      .then(res=>res.json())
      .then(handleSplitPrice);
    }
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
        <div>
          <button className={isSplit ? "splitButton" : "button"} onClick={toggleSplitPrice}>
            {isSplit ? "Undo Split Cost" : "Split Cost"}
          </button>
        </div>
        <p className='expenseCategory'>{category.toUpperCase()}</p>
      </div>
  );
}
export default ExpenseItem;