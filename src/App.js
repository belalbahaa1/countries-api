import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Countries from './components/Countries'
import Country from './components/Country'
import Filter from './components/Filter'
import Header from './components/Header'


function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/">
        <Countries />
      </Route>
        <Route path="/countries/:name" children={ <Country /> }></Route>
    </Router>
  )
}

export default App
