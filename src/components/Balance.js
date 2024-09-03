import React from 'react';

const Balance = ({ balance }) => {
  return (
    <div className="expenses">
      <h2>Total</h2>
      <h3>R{balance.toFixed(2)}</h3>
    </div>
  );
};

export default Balance;
