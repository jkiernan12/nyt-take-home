import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'

function Header() {
  return ( 
    <header>
      <Link to="/" >
        <h1>NYT</h1>
      </Link>
      <form>
        <button>🔎</button>
        <input className='search' type="search" />
      </form>
    </header>
   );
}

export default Header;