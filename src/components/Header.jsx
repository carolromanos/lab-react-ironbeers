import React from 'react'
import homeImg from '../assets/home.png'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='header'>
        <Link to={"/"}><img src={homeImg} alt='' /> </Link> 
            
        </div>
    )
}
