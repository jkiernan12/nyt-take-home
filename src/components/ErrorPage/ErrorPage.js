import { Link } from "react-router-dom"
import PageLayout from "../PageLayout/PageLayout"
import './ErrorPage.scss'

function ErrorPage() {
  return ( 
    <div className="page">
    <PageLayout />
    <div className="main-container">
    <h3>Hmm, looks like there's nothing here</h3>
    <Link to="/">
      <button className="return-button">Return to home</button>
    </Link>
    </div>
  </div>
   );
}

export default ErrorPage