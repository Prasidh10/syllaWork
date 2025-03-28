import { useState, useEffect } from 'react';
import { testAPI } from './utils/api';

function App() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await testAPI();
        setMessage(data.message);
      } catch (err) {
        setError('Failed to connect to the server');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">React + Express App</h1>
      {message && (
        <p className="text-lg text-green-600">{message}</p>
      )}
      {error && (
        <p className="text-lg text-red-600">{error}</p>
      )}
    </div>
  );
}

export default App
