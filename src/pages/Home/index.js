import {useContext, useState} from 'react'
import {CharactersContext} from '../../context/characterContext'
import Card from '../../components/Card'
import './styles.css'
const Home = () => {
    const {filteredCharacters, filterCharacters} = useContext(CharactersContext);
    const [name,setName] = useState('')
    const handleChange = ({target: {value}}) =>{
        setName(value)
    }
    return(
        <div>
        <header>
            <h1>Rick and Morty</h1>
            <h4>Lista de Personagens</h4>
            <form>
                <input type="text" placeholder="Digite o nome do personagem..." 
                 onChange={handleChange}
                />
                <button type="button" onClick={()=>filterCharacters(name) }>Buscar</button>
            </form>
        </header>
        <div>
            <div className={'cardList'}>
            {
               
              filteredCharacters.map(character => <Card {...character} key={character.name}/>) 
            }
            </div>
        </div>
    </div>
    )
}

export default Home