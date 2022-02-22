import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './CategoryPage.scss'
import MainSection from '../MainSection/MainSection'

function CategoryPage() {
  const [currCategory, setCurrCategory] = useState(useParams().categoryName)

  return ( 
    <main className='main-container'>
      <MainSection category={currCategory} />
    </main>
   );
}

export default CategoryPage;