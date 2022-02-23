import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './CategoryPage.scss'
import MainSection from '../MainSection/MainSection'
import Sidebar from '../Sidebar/Sidebar'

function CategoryPage() {
  const [currCategory, setCurrCategory] = useState(useParams().categoryName)

  return ( 
    <div className='page'>
    <Sidebar />
    <main className='main-container'>
      <MainSection category={currCategory} />
    </main>
    </div>
   );
}

export default CategoryPage;