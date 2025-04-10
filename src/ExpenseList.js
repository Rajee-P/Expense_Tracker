import React from 'react';
import './ExpenseList.css';

const ExpenseList = ({ expenses, onDelete }) => {
  if (expenses.length === 0) {
    return <p className="no-expenses">No expenses added yet.</p>;
  }

  return (
    <div>
      <h2 className="expense-list-title">Your Expenses</h2>
      <ul className="expense-list">
        {expenses.map((expense) => (
          <li key={expense.id} className="expense-item">
            <span className="expense-details">
              {expense.description} - ${expense.amount.toFixed(2)} ({expense.category})
            </span>
            <button
              className="delete-expense-button"
              onClick={() => onDelete(expense.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;