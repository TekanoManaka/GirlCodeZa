import React from 'react';

const Transactions = ({ transactions }) => {
  return (
    <div className="transactions">
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.description}: R{transaction.amount.toFixed(2)} on {new Date(transaction.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
