import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import './CategoryPage.scss'
import MainSection from '../MainSection/MainSection'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'

function CategoryPage() {
  let {categoryName} = useParams()
  const location = useLocation()
  const [currCategory, setCurrCategory] = useState(categoryName)

  useEffect(() => {
    setCurrCategory(() => categoryName)
  }, [location]);

  return ( 
    <div className='page'>
    <Header />
    <Sidebar />
    <main className='main-container'>
      <MainSection key={currCategory} category={currCategory} />
    </main>
    </div>
   );
}

export default CategoryPage;