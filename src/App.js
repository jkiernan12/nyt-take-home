import './App.scss'
import { Route, Routes } from 'react-router-dom'
import MainPage from './components/MainPage/MainPage'
import CategoryPage from './components/CategoryPage/CategoryPage'
import ArticlePage from './components/ArticlePage/ArticlePage'
import ErrorPage from './components/ErrorPage/ErrorPage'


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/category/:categoryName' element={<CategoryPage />} />
        <Route path ='/article/:articleName' element={<ArticlePage />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
