import './MainSection.scss'
import React, { useState, useEffect } from 'react'
import { getSection } from '../../api-calls'


function MainSection({category}) {
  useEffect(() => {
    getSection(category)
    .then(data => console.log(data))
  }, []);
  const toTitleCase = (word) => {
    const newWord = word.split('')
    newWord[0] = newWord[0].toUpperCase()
    return newWord.join('')
  }
  return ( 
    <section>
      <h2>{toTitleCase(category)}</h2>

    </section>
   );
}

export default MainSection;