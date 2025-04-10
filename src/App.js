import React, { useState } from 'react';
import './App.css';
import AddExpense from './AddExpense';
import ExpenseList from './ExpenseList';
import TotalBalance from './TotalBalance';
import ExpenseChart from './ExpenseChart';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [screen, setScreen] = useState('home'); // 'home', 'addExpense', 'viewExpenses'

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const clearExpenses = () => {
    setExpenses([]);
  };

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="navbar-title">Expense Tracker</h1>
        <div className="navbar-links">
          <button onClick={() => setScreen('home')}>Home</button>
          <button onClick={() => setScreen('addExpense')}>Add Expense</button>
          <button onClick={() => setScreen('viewExpenses')}>View Expenses</button>
        </div>
      </nav>

      {/* Screens */}
      {screen === 'home' && (
        <div className="home-container">
          <h2 className="home-title">Welcome to Expense Tracker</h2>
          <p className="home-description">Manage your expenses efficiently!</p>
          <div className="home-buttons">
          <button onClick={() => setScreen('addExpense')} className="home-button">
          Add Expense
          </button>
          <button onClick={() => setScreen('viewExpenses')} className="home-button">
          View Expenses
          </button>
          </div>
        </div>
)}
      {screen === 'addExpense' && (
        <div>
          <AddExpense onAddExpense={addExpense} />
        </div>
      )}
      {screen === 'viewExpenses' && (
        <div className="view-expenses-container">
          <div className="expense-list-container">
            <ExpenseList expenses={expenses} onDelete={deleteExpense} />
            <div className="clear-expenses-container">
              <button onClick={clearExpenses} className="clear-expenses-button">
                Clear All Expenses
              </button>
            </div>
          </div>
          <div className="expense-chart-container">
            <ExpenseChart expenses={expenses} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;