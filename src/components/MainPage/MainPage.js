import MainSection from '../MainSection/MainSection'
import './MainPage.scss'
import PageLayout from '../PageLayout/PageLayout'
import React, { useState } from 'react'

function MainPage() {
  const [filterTerm, setFilterTerm] = useState('')

  return (
    <div className='page'>
      <PageLayout 
        setFilterTerm={setFilterTerm}
        filterTerm={filterTerm} />
      <main className='main-container'>
        <MainSection key="arts"
          category="arts" 
          filterTerm={filterTerm} />
        <MainSection key="science"
          category="science" 
          filterTerm={filterTerm} />
        <MainSection key="sports"
          category="sports" 
          filterTerm={filterTerm} />
        <MainSection key="food"
          category="food" 
          filterTerm={filterTerm} />
        <MainSection key="books"
          category="books" 
          filterTerm={filterTerm} />
        <MainSection key="technology"
          category="technology"
          filterTerm={filterTerm} />
      </main>
    </div>
  )
}

export default MainPage