import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path='/' element={<MainPage />} />
    </Routes>
    </div>
  );
}

export default App;
