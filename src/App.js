import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    try {
      const response = await fetch('http://internal-QcatCd-QcatB-dcSHjWVbLQbx-1594602165.ap-south-1.elb.amazonaws.com:8080/hello');
      const data = await response.text();
      setMessage(data);
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
        <button onClick={fetchMessage}>Fetch Message</button>
        {message && <p>{message}</p>}
      </header>
    </div>
  );
}

export default App;
