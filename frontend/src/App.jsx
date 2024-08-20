import { useEffect } from 'react';
import API from './services/ApiServices';
import './App.css';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get('/branches');
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <h1 className="text-3xl font-bold underline text-blue-300">
      Hello world!
    </h1>
  );
}

export default App;
