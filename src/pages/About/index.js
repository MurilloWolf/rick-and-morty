import React , {useContext } from 'react'
import {CharactersContext} from '../../context/characterContext'
import {Link } from 'react-router-dom'
const About = () =>{
    const {selectedCharacter: {name,origin,image,status,episode}} = useContext(CharactersContext)
    return(
        <div>
            <Link to={'/'}>Voltar</Link>
            <h1>{name}</h1>
            <img src={image} alt={name}/>
           
            <p>{status}</p>
            <p>{origin.name}</p>
            <div>
                <h4>Episodios em que aparece: </h4>
                <ul>
                {
                    episode?.map(epi=> {
                        const epiSpli = epi.split('/')
                        const episodeNumber = epiSpli[epiSpli.length -1]
                        return <li key={episodeNumber}>{episodeNumber}</li>
                    })
                }
                </ul>
            </div>
        </div>
        
    )
}

export default About;