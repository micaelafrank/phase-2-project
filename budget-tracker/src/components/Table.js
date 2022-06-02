import React from "react";
function Table({expenses}){
    const current = new Date();
    const month = `${current.getMonth()+1}`;
    const year = `${current.getFullYear()}`;
    const tableRow = expenses.map((expense) => (
        <tr key={expense.id}>
            <td style={{ paddingRight: "20px"}}>{month}-{expense.day}-{year}</td>
            <td style={{ padding: "0px 20px"}}>{expense.name}</td>
            <td>${expense.amount<0?((expense.amount * -1).toFixed(2)):(expense.amount.toFixed(2))}</td>
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
            <tbody>{tableRow}</tbody>
        </table>
    )
}
export default Table;