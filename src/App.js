import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import CategoryPage from './components/CategoryPage/CategoryPage'
import ArticlePage from './components/ArticlePage/ArticlePage'


function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/category/:categoryName' element={<CategoryPage />} />
      <Route path ='/article/:articleName' element={<ArticlePage />} />
    </Routes>
    </div>
  );
}

export default App;
