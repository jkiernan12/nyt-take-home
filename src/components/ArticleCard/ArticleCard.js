import './ArticleCard.scss'

function ArticleCard({article}) {
  return ( 
    <a href={article.url} target="_blank">
     <article className='article-container'>
        <div className='article-container--text'>
          <h4>{article.title}</h4>
          <p className='byline'>{article.byline}</p>
          <p className='abstract'>{article.abstract}</p>
        </div>
        <img className='article-container--image' src={article.imageSmall && article.imageSmall.url} />
      </article>
    </a>
   )
}

export default ArticleCard;