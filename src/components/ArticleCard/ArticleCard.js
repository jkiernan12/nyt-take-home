import { Link } from 'react-router-dom'
import './ArticleCard.scss'
import { toKebabCase } from '../../utils'

function ArticleCard({article}) {
  return ( 
    <Link 
      to={`/article/${toKebabCase(article.title)}`} 
      state={{article}}>
      <article className='article-container'>
        <div className='article-container--text'>
          <h4>{article.title}</h4>
          <p className='byline'>{article.byline}</p>
          <p className='abstract'>{article.abstract}</p>
        </div>
        <img className='article-container--image' src={article.imageSmall && article.imageSmall.url} alt={article.imageSmall && article.imageSmall.caption} />
      </article>
    </Link>
  )
}

export default ArticleCard