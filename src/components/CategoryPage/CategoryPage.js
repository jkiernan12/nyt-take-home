import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './CategoryPage.scss'
import MainSection from '../MainSection/MainSection'

function CategoryPage() {
  // const urlCategory = useParams().categoryName
  const [currCategory, setCurrCategory] = useState(useParams().categoryName)
  // console.log(urlCategory)

  // useEffect(() => {
  //   if (!currCategory) {
  //     setCurrCategory(() => urlCategory)
  //     console.log('category reassigned')
  //   }
  // }, []);

  return ( 
    <main className='main-container'>
    <h1>{currCategory}</h1>
    <MainSection category={currCategory} />
  </main>
   );
}

export default CategoryPage;