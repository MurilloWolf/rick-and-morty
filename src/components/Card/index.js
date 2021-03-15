import { useState ,useContext} from 'react'
import { Redirect } from 'react-router-dom'
import './styles.css'
import {CharactersContext} from '../../context/characterContext'

const Card = ({name, status, species, image, origin}) =>{

    const {selectCharacter} = useContext(CharactersContext)
    const [redirect,setRedirect]= useState(false)

    const handleSelectCharacter = () =>{
        selectCharacter(name)
        setRedirect(true)
    }

    return(
        <div className={'card'} onClick={handleSelectCharacter}>
            <img src={image} alt={name}/>
            <div className={'description'}>

                <h5 className={'title'}>{name}</h5>
                <div className={'status'}>
                    <div className={'dot'}/>
                    <p><small>{status}</small></p>
                </div>
                <p>{origin.name}</p>
                <p>{species}</p>
            </div>
            {redirect && <Redirect to="/About"/>}
        </div>
    )
}

export default Card