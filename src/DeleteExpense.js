import React from 'react';
import './DeleteExpense.css'; 

const DeleteExpense = ({ expenseId, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this expense?')) {
      onDelete(expenseId);
    }
  };

  return (
    <button className="delete-expense-button" onClick={handleDelete}>
      Delete Expense
    </button>
  );
};

export default DeleteExpense;