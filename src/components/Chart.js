import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ transactions }) => {
  
  const colors = [
    '#021C1E', 
    '#093028', 
    '#004445', 
    '#237A57', 
    '#2C7873', 
    '#6FB98F', 
  ];

  const data = {
    labels: transactions.map(t => t.description),
    datasets: [
      {
        data: transactions.map(t => t.amount),
        backgroundColor: colors.slice(0, transactions.length), 
        borderColor: '#fff', 
        borderWidth: 1, 
      },
    ],
  };

  return (
    <div className="pie">
      <h2>Expense Breakdown</h2>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
