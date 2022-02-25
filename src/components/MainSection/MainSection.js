import './MainSection.scss'
import React, { useState, useEffect } from 'react'
import { getSection } from '../../api-calls'
import ArticleCard from '../ArticleCard/ArticleCard'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { validateCategory, toTitleCase } from '../../utils'

function MainSection({category, filterTerm}) {
  const navigate = useNavigate()
  const location = useLocation()
  const [articles, setArticles] = useState([])
  const [searchArticles, setSearchArticles] = useState([])
  const [currCategory] = useState(category)
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
        .catch(err => {
          navigate('/network-error')
        })
    } else {
      navigate('/error')
    }
  }, [location])

  useEffect(() => {
    if (filterTerm) { 
      const newArticles = [...articles].filter(article => {
        return article.title.toLowerCase().includes(filterTerm) || article.abstract.toLowerCase().includes(filterTerm)
      })
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
        {searchArticles.length === 0 && filterTerm && <p className="search-error">Hmm... looks like there aren't any results. Try changing your search terms.</p>}
        {searchArticles.length > 0 || filterTerm ? searchArticles.map((article, i) => {
          if (i < maxArticles) {
            return <ArticleCard key={article.url} article={article} />
          } else {
            return undefined
          }
        }) : articles.map((article, i) => {
          if (i < maxArticles) {
            return <ArticleCard key={article.url} article={article} />
          } else {
            return undefined
          }
        })}
      </section>}
    </>
  )
}

export default MainSection