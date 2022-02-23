import './MainSection.scss'
import React, { useState, useEffect } from 'react'
import { getSection } from '../../api-calls'
import ArticleCard from '../ArticleCard/ArticleCard'
import { useLocation, useParams } from 'react-router-dom'
import { validateCategory, toTitleCase } from '../../utils'

function MainSection({category}) {
  const location = useLocation()
  console.log(location)
  const [articles, setArticles] = useState([])
  const [currCategory, setCurrCategory] = useState(category)
  const [maxArticles, setMaxArticles] = useState(5)

  useEffect(() => {
    if (location.pathname.includes('category/')) {
      setMaxArticles(() => 20)
    } else {
      setMaxArticles(() => 5)
    }
    if (validateCategory(currCategory)) {
      getSection(currCategory)
      .then(data => {
        console.log('fetch ran')
        const newArticles = [...articles, ...data]
        setArticles(() => newArticles)
      })
    }
  }, [location])

  return ( 
    <section className='section-container'>
      <h2>{currCategory && toTitleCase(currCategory)}</h2>
      {articles.length > 0 && articles.map((article, i) => {
        if (i < maxArticles) {
          return <ArticleCard key={article.url} article={article} />
        }
      })}
    </section>
   );
}

export default MainSection;