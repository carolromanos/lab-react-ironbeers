import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import Header from '../components/Header'

export default function NewBeer() {
    const [newBeer, setFormState] = useState({})
    const history = useHistory()
   

    function handleSubmit(event){
        event.preventDefault()
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new",
        newBeer)
        .then((response)=>{
            setFormState({})
            history.push("/")
    
        }).catch(console.log)
    }
    function handleInput(event){
        setFormState({...newBeer, [event.target.name]: event.target.value})
    }


    return (
        <div>
        <Header />
        <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label><br />
                <input type="text" id="name" name="name" onChange={handleInput} /><br />
                
                <label htmlFor="tagline">Tagline: </label><br />
                <input type="text" id="tagline" name="tagline" onChange={handleInput} /><br />
                
                <label htmlFor="description">Description: </label><br />
                <input type="text" id="description" name="description" onChange={handleInput} /><br />
                
                <label htmlFor="first_brewed">First Brewed:</label><br />
                <input type="text" id="first_brewed" name="first_brewed" onChange={handleInput} /><br />
                
                <label htmlFor="brewers_tips">Brewers Tips:</label><br />
                <input type="text" id="brewers_tips" name="brewers_tips" onChange={handleInput} /><br />
                
                <label htmlFor="attenuation_level ">Attenuation Level:</label><br />
                <input type="number" id="attenuation_level" name="attenuation_level" onChange={handleInput} /><br />
                
                <label htmlFor="contributed_by ">Contributed By:</label><br />
                <input type="text" id="contributed_by" name="contributed_by" onChange={handleInput} /> <br />
                
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
