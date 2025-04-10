import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseChart = ({ expenses }) => {
  if (expenses.length === 0) {
    return <p className="no-expenses">No expenses to display.</p>;
  }

  const categories = [...new Set(expenses.map((expense) => expense.category))];
  const data = {
    labels: categories,
    datasets: [
      {
        data: categories.map((category) =>
          expenses
            .filter((expense) => expense.category === category)
            .reduce((sum, expense) => sum + expense.amount, 0)
        ),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <h2 className="chart-title">Expense Breakdown</h2>
      <div className="chart-wrapper">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default ExpenseChart;