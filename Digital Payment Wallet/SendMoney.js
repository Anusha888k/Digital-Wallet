import React, { useState } from 'react';

const SendMoney = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    console.log({ recipient, amount }); // Replace this with API call
  };

  return (
    <form onSubmit={handleSend}>
      <h2>Send Money</h2>
      <input type="text" placeholder="Recipient" value={recipient} onChange={(e) => setRecipient(e.target.value)} required />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      <button type="submit">Send</button>
    </form>
  );
};

export default SendMoney;