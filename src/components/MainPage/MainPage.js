import MainSection from '../MainSection/MainSection'
import './MainPage.scss'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
import PageLayout from '../PageLayout/PageLayout'
import React, { useState } from 'react';

function MainPage() {
  const [filterTerm, setFilterTerm] = useState('')

  return (
    <div className='page'>
      <PageLayout setFilterTerm={setFilterTerm} />
      <main className='main-container'>
        <MainSection category="arts" filterTerm={filterTerm} />
        <MainSection category="science" filterTerm={filterTerm} />
        <MainSection category="sports" filterTerm={filterTerm} />
        <MainSection category="food" filterTerm={filterTerm} />
        <MainSection category="books" filterTerm={filterTerm} />
        <MainSection category="technology" />
      </main>
    </div>
  );
}

export default MainPage;