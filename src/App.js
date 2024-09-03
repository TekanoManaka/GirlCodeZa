import React, { useState } from 'react';
import Balance from './components/Balance';
import TransactionForm from './components/Form';
import ExpensePieChart from './components/Chart';
import TransactionList from './components/Transactions';
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const balance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <div className="main">
      <Balance balance={balance} />
      <TransactionForm addTransaction={addTransaction} />
      <ExpensePieChart transactions={transactions} />
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default App;
