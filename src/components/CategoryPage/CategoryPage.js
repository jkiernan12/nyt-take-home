import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import './CategoryPage.scss'
import MainSection from '../MainSection/MainSection'
import PageLayout from '../PageLayout/PageLayout'

function CategoryPage() {
  let {categoryName} = useParams()
  const location = useLocation()
  const [filterTerm, setFilterTerm] = useState('')
  const [currCategory, setCurrCategory] = useState(categoryName)

  useEffect(() => {
    setCurrCategory(() => categoryName)
  }, [location])

  return ( 
    <div className='page'>
    <PageLayout setFilterTerm={setFilterTerm} />
    <main className='main-container'>
      <MainSection key={currCategory} category={currCategory} />
    </main>
    </div>
   );
}

export default CategoryPage;