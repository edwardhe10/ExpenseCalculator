import React, { useState } from "react";
import uuid from "react-uuid";

function ExpenseCalculator(props) {
  const [expense, setExpense] = useState("");
  const [price, setPrice] = useState("");

  const handleExpenseChange = (event) => {
    setExpense(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (expense.trim() === "" || price.trim() === "") {
      alert("Please enter an expense and its price.");
      return;
    }
    if (isNaN(price) || Number(price) <= 0) {
      alert("Please enter a valid price.");
      return;
    }

    props.onSubmit({
      id: uuid(),
      name: expense,
      cost: price,
    });
    setExpense("");
    setPrice("");
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <label className="expense-input">
        Expense:
        <input type="text" value={expense} onChange={handleExpenseChange} />
      </label>
      <label className="price-input">
        Price:
        <input type="number" value={price} onChange={handlePriceChange} />
      </label>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseCalculator;
