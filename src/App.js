import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import { Switch, Route  } from 'react-router-dom';
import ListBeers from './pages/ListBeers';
import SingleBeer from './pages/SingleBeer';
import NewBeer from './pages/NewBeer'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/beers" component={ListBeers}/>
        <Route exact path="/beers/new" component={NewBeer}/>
        <Route exact path="/beers/:id" component={SingleBeer}/>
        <Route exact path="/beers/random" component={SingleBeer}/>
        
      </Switch>
    </div>
  );
}

export default App;
