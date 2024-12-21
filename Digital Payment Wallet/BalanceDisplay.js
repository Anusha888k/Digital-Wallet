import React, { useState, useEffect } from 'react';

const BalanceDisplay = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    // Simulate fetching balance from API
    setBalance(5000);
  }, []);

  return <h3>Current Balance: ₹{balance}</h3>;
};

export default BalanceDisplay;