import React from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ListBeers() {
  const [beers, setBeers] = useState([]);

  function cleanOwner(string){
      //console.log(string)
     // string.slice(1, 7)

  }
  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        setBeers(response.data);
        console.log(response.data);
      })
      .catch(console.log);
  }, []);

  return (
    <>
      <Header />
      <div>
        {beers.map((beer) => (
          <div key={beer._id} className="beer-list">
            <Link to={`/beers/${beer._id}`}>
              <img src={beer.image_url} alt="" />
            </Link>
            <h3>{beer.name}</h3>
            <h4>{beer.tagline}</h4>
            <p>Created by: {beer.contributed_by} </p>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}
