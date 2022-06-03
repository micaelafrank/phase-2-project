import React, { useState, useEffect } from "react";

function Table ({expenses}){
    const [addedExpense, setAddedExpense] = useState(0);
    useEffect(()=>{
        const totalExpense = expenses.reduce((accumulator,expense)=>{
          return expense.amount<0?accumulator:expense.amount+accumulator},0)
          setAddedExpense(totalExpense.toFixed(2))
        },[expenses])

    const current = new Date();
    const month = `${current.getMonth()+1}`;
    const year = `${current.getFullYear()}`;
    const tableRow = expenses.map((expense) => (
        <tr key={expense.id} className={expense.amount<0?"incomeTable":""}>
            <td style={{ paddingRight: "20px"}}>{month}-{expense.day}-{year}</td>
            <td style={{ padding: "0px 20px"}}>{expense.name}</td>
            <td>${Math.abs(expense.amount).toFixed(2)}</td>
            <td style={{ paddingLeft: "20px"}}>{expense.category}</td>
        </tr>
    ))
    return(
        <table>
            <thead>
                <tr style={{ textAlign: "center" }}>
                    <th>Date of Purchase</th>
                    <th>Purchase Item</th>
                    <th>Amount Spent</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>{tableRow}<tr><td></td><td><b>Total Spent:</b></td><td><em><b>${addedExpense}</b></em></td></tr></tbody>        
        </table>
    )
}
export default Table;