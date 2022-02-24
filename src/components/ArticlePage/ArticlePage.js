import { useLocation } from "react-router-dom"
import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"
import './ArticlePage.scss'

function ArticlePage() {
  const location = useLocation()
  const { article } = location.state
  console.log('article here', article)
  console.log('test')

  return ( 
    <div className="page">
      <Sidebar />
      <Header />
      <div className="main-container">
        <h2>{article.title}</h2>
        <img className="hero-image" src={article.imageLarge.url} />
        <caption>{article.imageLarge.caption}</caption>
        <p className="article-text">{article.abstract} ...</p>
        <a  href={article.url} target="_blank"><button className="read-more-button">Read more</button></a>
      </div>
    </div>
   )
}

export default ArticlePage