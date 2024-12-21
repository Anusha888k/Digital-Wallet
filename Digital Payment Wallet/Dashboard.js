import React from 'react';
import BalanceDisplay from './BalanceDisplay';
import TransactionHistory from './TransactionHistory';
import TransactionGraph from './TransactionGraph';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <BalanceDisplay />
      <TransactionHistory />
      <TransactionGraph />
    </div>
  );
};

export default Dashboard;