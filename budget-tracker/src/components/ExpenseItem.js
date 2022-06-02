import React from 'react';

function ExpenseItem({name, image, amount, category, id, day, isSplit, deleteExpense, handleSplitPrice}){
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
    const dollarAmount = amount.toFixed(2);
    const showButton = amount<0 ? null :( <button className={isSplit ? "splitButton" : "button"} onClick={toggleSplitPrice}>
    {isSplit ? "Undo Split Cost" : "Split Cost"}
    </button>)
  return (
      <div className={(amount < 0) ? "income" : "expense"}>
        <h2 style={{ marginBottom: "3px" }} className={(amount < 0) ? "incomeName" : "expenseName"}>{name}</h2>
        <p style={{ marginTop: "3px" }} className={(amount < 0) ? "incomePurchaseDate" : "expensePurchaseDate"}>{(amount < 0) ? "Got paid on" : "Purchased on"} {new Date().toLocaleString("en-US", { month: "long" })} {day}</p>
        <p className='expensePrice'>Total: ${(amount < 0) ? (dollarAmount * -1) : dollarAmount}</p>
        <img className="expenseImage" src={image} alt={name}/>
        <button style={{ marginTop: "5px", marginBottom: "0" }} className={(amount < 0) ? "greenButton" : null} onClick={handleDelete}>Delete</button>
        <div style={{ marginTop: "0" }}>
          {showButton}
        </div>
        <p className={(amount < 0) ? "greenCategory" : "expenseCategory"}>{category.toUpperCase()}</p>
      </div>
  );
}
export default ExpenseItem;