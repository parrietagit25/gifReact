import React from 'react'
import './App.css'
import ListOfGifs from './components/ListOfGifs'

import {Link, Route} from "wouter"

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>App Gif animados</h1>
        <Link to='/gif/silent+hill'>Silent Hill</Link>
        <Link to='/gif/cyber+punk'>Cyber Punk</Link>
        <Link to='/gif/zombie'>Zombie</Link>
        <Link to='/gif/south+park'>South Park</Link>

        <Route path="/gif/:keyword" component={ListOfGifs} />
        
      </section>
    </div>
  );
}

export default App

// <ListOfGifs keyword='cat' />
