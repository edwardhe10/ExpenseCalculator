import React from "react";

function Expense({ expenses, totalExpenses }) {
  return (
    <div>
      {expenses.map((expense) => (
        <div className="expense-box" key={expense.id}>
          <div className="expense-details">
            {expense.name} - ${expense.cost}
          </div>
        </div>
      ))}
      <h3>Total Expenses: ${totalExpenses}</h3>
    </div>
  );
}

export default Expense;
