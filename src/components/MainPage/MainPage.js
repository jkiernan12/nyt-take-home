import MainSection from '../MainSection/MainSection'
import './MainPage.scss'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
import React, { useState } from 'react';

function MainPage() {
  const [filterTerm, setFilterTerm] = useState('')

  return (
    <div className='page'>
      <Header setFilterTerm={setFilterTerm} />
      <Sidebar />
      <main className='main-container'>
        <MainSection category="arts" filterTerm={filterTerm} />
        <MainSection category="science" filterTerm={filterTerm} />
        <MainSection category="sports" filterTerm={filterTerm} />
        <MainSection category="food" filterTerm={filterTerm} />
        <MainSection category="books" filterTerm={filterTerm} />
        <MainSection category="technology" filterTerm={filterTerm} />
      </main>
    </div>
  );
}

export default MainPage;