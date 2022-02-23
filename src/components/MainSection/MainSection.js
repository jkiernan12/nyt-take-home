import './MainSection.scss'
import React, { useState, useEffect } from 'react'
import { getSection } from '../../api-calls'
import ArticleCard from '../ArticleCard/ArticleCard'
import { useLocation, useParams } from 'react-router-dom'
import { validateCategory, toTitleCase } from '../../utils'

function MainSection({category}) {
  const location = useLocation()
  const [articles, setArticles] = useState([])
  const [currCategory, setCurrCategory] = useState(category)

  useEffect(() => {
    if (validateCategory(currCategory)) {
      getSection(currCategory)
      .then(data => {
        const newArticles = [...articles, ...data]
        setArticles(() => newArticles)
      })
    }
  }, [location])

  return ( 
    <section className='section-container'>
      <h2>{currCategory && toTitleCase(currCategory)}</h2>
      {articles.length > 0 && articles.map((article, i) => {
        if (i < 5) {
          return <ArticleCard key={article.url} article={article} />
        }
      })}
    </section>
   );
}

export default MainSection;