import './App.css';
import LoginForm from './components/Login.Form';
import MainCard from './components/MainCard';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const name = "Abdurraheman";
    const isNameInLocalStorage = localStorage.getItem('userName');
    if (!isNameInLocalStorage) {
      localStorage.setItem('userName', JSON.stringify(name));
    }
  }, []);

  const isNameInLocalStorage = localStorage.getItem('userName');

  return (
    <div className="App">
      {isNameInLocalStorage ? <MainCard /> : <LoginForm />}
    </div>
  );
}

export default App;
