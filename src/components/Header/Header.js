import React, { useState, useEffect } from 'react';
import './Header.scss'

function Header() {
  return ( 
    <header>
      <h1>NYT</h1>
      <form>
        <button>🔎</button>
        <input className='search' type="search" />
      </form>
    </header>
   );
}

export default Header;