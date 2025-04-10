import React, { useState } from 'react';
import './AddExpense.css'; 

const AddExpense = ({ onAddExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount && category) {
      onAddExpense({
        description,
        amount: parseFloat(amount),
        category,
        date: date || new Date().toISOString().split('T')[0], 
      });
      setDescription('');
      setAmount('');
      setCategory('');
      setDate('');
    }
  };

  return (
    <form className="add-expense-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Add New Expense</h2>
      <input
        type="text"
        placeholder="Expense Name"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="form-input"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        className="form-input"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
        className="form-select"
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Other">Other</option>
      </select>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="form-input"
      />
      <button type="submit" className="form-button">Add Expense</button>
    </form>
  );
};

export default AddExpense;