import React from 'react'
import { useEffect, useState, useParams  } from 'react';
import axios from 'axios';
import Header from '../components/Header';


export default function RandomBeer() {
    const [beer, setBeer] =useState({})
   
    useEffect(() => {
        axios
          .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
          .then((response) => {
            setBeer(response.data);
            console.log(response.data);
          })
          .catch(console.log);
      }, []);
    return (
        <div>
         <Header />
         <img src={beer.image_url} width="100px" alt=""/>
         <h2>{beer.name}</h2>
         <h3>{beer.tagline}</h3>
         <p>{beer.first_brewed}</p>
         <p>{beer.attenuation_level}</p>
         <p>{beer.description}</p>
         <p>{beer.contributed_by}</p>
            
        </div>
    )
}
