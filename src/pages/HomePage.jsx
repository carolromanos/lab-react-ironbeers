import React from 'react'
import { Link } from 'react-router-dom'
import beers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'


export default function HomePage() {
    return (
    <div className='home-page'>
        <div className='home-link'>
           <img src={beers} alt=''></img>
           <Link to="/beers"> All Beers</Link>
        </div>
        <div className='home-link'>
            <img src={randomBeer} alt=''></img>
            <Link to="/beers/random"> Random Beer</Link>
        </div>
        <div className='home-link'>
            <img src={newBeer} alt=''></img>
            <Link to="/beers/new"> New Beer</Link>          
        </div>
    </div>
    )
}
