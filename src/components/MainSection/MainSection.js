import './MainSection.scss'
import React, { useState, useEffect } from 'react'
import { getSection } from '../../api-calls'
import ArticleCard from '../ArticleCard/ArticleCard'

function MainSection({category}) {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    getSection(category)
    .then(data => {
      const newArticles = [...articles, ...data]
      setArticles(newArticles)
    })
  }, [])

  const toTitleCase = (word) => {
    const newWord = word.split('')
    newWord[0] = newWord[0].toUpperCase()
    return newWord.join('')
  }
  return ( 
    <section className='section-container'>
      <h2>{toTitleCase(category)}</h2>
      {articles.length > 0 && articles.map((article, i) => {
        if (i < 5) {
          return <ArticleCard key={article.url} article={article} />
        }
      })}
    </section>
   );
}

export default MainSection;