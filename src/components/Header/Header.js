import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'

function Header({setFilterTerm, filterTerm}) {
  const [searchValue, setSearchValue] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setFilterTerm(searchValue)
    setSearchValue(() => '')
  }

  return ( 
    <header>
      <Link to="/" >
        <h1>NYT</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <button type="submit" >🔎</button>
        <input 
        className='search' 
        type="search"
         placeholder={'Search for stories'} 
         value={searchValue} 
         onChange={(e) => setSearchValue(() => e.target.value)} />
      </form>
      {filterTerm && <button className="clear-button" onClick={() => setFilterTerm('')}>Clear search</button>}
    </header>
   );
}

export default Header;