import { Link } from "react-router-dom"
import PageLayout from "../PageLayout/PageLayout"
import { useLocation } from "react-router-dom"
import './ErrorPage.scss'
import React, { useState, useEffect } from 'react';

function ErrorPage() {
  const location = useLocation()
  const [networkError, setNetworkError] = useState(false)

  useEffect(() => {
    if (location.pathname.includes('network-error')) {
      setNetworkError(() => true)
    }
  }, [])

  return ( 
    <div className="page">
    <PageLayout />
    <div className="main-container">
    {networkError ? <h3>There was a network error. Please wait and try again.</h3> : <h3>Hmm, looks like there's nothing here</h3>}
    <Link to="/">
      <button className="return-button">Return to home</button>
    </Link>
    </div>
  </div>
   );
}

export default ErrorPage