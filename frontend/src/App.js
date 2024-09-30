import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // this is our router
import PokemonList from './components/PokemonList';
import PokemonDetailWrapper from './components/PokemonDetailWrapper';
import FavoriteList from './components/FavoriteList';
const gitHubUrl = 'https://github.com/uriel-martinez1/django-react-pokemon-app';

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='nav'>
          <Link to='/'>Home</Link>
          <span>
            &nbsp;|&nbsp;
            <Link to='/favorite'>View Favorite Pokemon</Link>
          </span>
          <span>
            &nbsp;|&nbsp;
            <Link to={gitHubUrl} target='_blank' rel='noopener noreferrer'>GitHub</Link>
          </span>
        </div>
        <Routes>
          <Route path='/' element={<PokemonList />} />
          <Route path='/pokemon/:id' element={<PokemonDetailWrapper />} />
          <Route path='/favorite' element={<FavoriteList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; // we need this to render it