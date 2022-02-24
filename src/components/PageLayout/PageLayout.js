import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"
import './PageLayout.scss'
import React, { useState } from 'react';


function PageLayout({setFilterTerm}) {
  return ( 
    <>
      <Header 
      setFilterTerm={setFilterTerm}/>
      <Sidebar />
    </>
   );
}

export default PageLayout;