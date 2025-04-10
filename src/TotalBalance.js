import React from 'react';
import './TotalBalance.css';

const TotalBalance = ({ expenses }) => {
  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className="total-balance-container">
      <h2 className="total-balance-title">Total Expense</h2>
      <p className="total-balance-amount">${total.toFixed(2)}</p>
    </div>
  );
};

export default TotalBalance;