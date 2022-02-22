import './ArticleCard.scss'

function ArticleCard({article}) {
  return ( 
    <article>
      <h4>{article.title}</h4>
      <p>{article.abstract}</p>
    </article>
   )
}

export default ArticleCard;