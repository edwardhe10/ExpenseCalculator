import React, { useState } from "react";
import ExpenseCalculator from "./ExpenseCalculator.js";
import Expense from "./Expense.js";

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);
  const [totalExpenses, setTotalExpenses] = useState(0);

  const addExpense = (expense) => {
    setTotalExpenses(totalExpenses + Number(expense.cost));
    setExpenses((prevExpenses) => {
      return prevExpenses.concat(expense);
    });
  };

  const reset = () => {
    window.location.reload();
  };

  return (
    <div>
      <h1>Expense Calculator</h1>
      <ExpenseCalculator onSubmit={addExpense} />
      <button onClick={reset}>Reset</button>
      <h2>Expenses</h2>
      <Expense expenses={expenses} totalExpenses={totalExpenses} />
    </div>
  );
}

export default ExpenseList;
