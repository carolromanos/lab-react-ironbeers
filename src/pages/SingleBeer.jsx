import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

export default function SingleBeer() {

    const [beer, setBeer] =useState({})
    const { id: beerId} = useParams()
    useEffect(() => {
        axios
          .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
          .then((response) => {
            setBeer(response.data);
            
          })
          .catch(console.log);
      }, [beerId]);
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
