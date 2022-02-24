import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"
import './PageLayout.scss'
import React from 'react';


function PageLayout({setFilterTerm, filterTerm}) {
  return ( 
    <>
      <Header 
      setFilterTerm={setFilterTerm}
      filterTerm={filterTerm}
      />
      <Sidebar />
    </>
   );
}

export default PageLayout;