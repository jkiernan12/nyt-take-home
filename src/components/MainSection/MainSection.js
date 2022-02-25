import './MainSection.scss'
import React, { useState, useEffect } from 'react'
import { getSection } from '../../api-calls'
import ArticleCard from '../ArticleCard/ArticleCard'
import { Link, useLocation } from 'react-router-dom'
import { validateCategory, toTitleCase } from '../../utils'

function MainSection({category, filterTerm}) {
  const location = useLocation()
  const [articles, setArticles] = useState([])
  const [searchArticles, setSearchArticles] = useState([])
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
          const newArticles = [...articles, ...data]
          setArticles(() => newArticles)
        })
    }
  }, [location])

  useEffect(() => {
    if (filterTerm) { 
      const newArticles = [...articles].filter(article => {
        return article.title.toLowerCase().includes(filterTerm) || article.abstract.toLowerCase().includes(filterTerm)
      })
      console.log(newArticles)
      setSearchArticles(() => newArticles)
    } else {
      setSearchArticles(() => [])
    }
  }, [articles, filterTerm])

  return ( 
    <>
      {articles.length > 0 && <section className='section-container'>
        <Link to={`/category/${currCategory}`}>
          <h2>{currCategory && toTitleCase(currCategory)}</h2>
        </Link>
        {searchArticles.length > 0 || filterTerm ? searchArticles.map((article, i) => {
          if (i < maxArticles) {
            return <ArticleCard key={article.url} article={article} />
          }
        }) : articles.map((article, i) => {
          if (i < maxArticles) {
            return <ArticleCard key={article.url} article={article} />
          }
        })}
      </section>}
    </>
  )
}

export default MainSection