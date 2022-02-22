import './ArticleCard.scss'

function ArticleCard({article}) {
  return ( 
    <article className='article-container'>
      <div className='article-container--text'>
        <h4>{article.title}</h4>
        <p>{article.byline}</p>
        <p>{article.abstract}</p>
      </div>
      <img className='article-container--image' src={article.imageSmall && article.imageSmall.url} />
    </article>
   )
}

export default ArticleCard;