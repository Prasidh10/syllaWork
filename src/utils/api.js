const API_URL = 'http://localhost:5000/api';

export const testAPI = async () => {
  try {
    const response = await fetch(`${API_URL}/test`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}; 