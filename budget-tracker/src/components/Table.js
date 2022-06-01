import React from "react";

function Table({expenses}){
    const tableRow = expenses.map((expense) => (
        <tr key={expense.id}>
            <td>{expense.name}</td>
            <td>${expense.amount.toFixed(2)}</td>
            <td>{expense.category}</td>
        </tr>
    ))
    return(
        <table>
            <thead>
                <tr>
                    <th>Purchase Item</th>
                    <th>Amount Spent</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>{tableRow}</tbody>
        </table>
    )
}

export default Table;