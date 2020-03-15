import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom"
import './App.css'

import Spinner from "./components/Spinner"
import NavBar from "./components/NavBar"

import Home from "./pages/Home"
import Movie from "./pages/Movie"
import SearchResult from "./pages/SearchResult"

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movie/:movie_id" component={Movie} />
          <Route path="/search/:q" component={SearchResult} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
