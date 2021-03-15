import {createContext, useState, useEffect} from 'react'

export const CharactersContext = createContext([])

const CharacterProvider = ({children}) => {
    const [characters,setCharacters] = useState([])
    const [filteredCharacters,setFilteredCharacters] = useState([])
    const [selectedCharacter, setSelectedCharacter] = useState({}) 
   
    useEffect(()=>{
       const fetchCharacters = async () =>{
            const endpoint = 'https://rickandmortyapi.com/api/character';
            const {results} = await fetch(endpoint).then(res => res.json());
            setCharacters(results)
       }
       fetchCharacters()
    },[])

    const charactersFilter = (characterName) => {
        const filtered = characters?.filter(({name}) => name.includes(characterName)); 
        setFilteredCharacters(filtered || characters)
    }

    const changeSelected = (characterName) =>{
        const filtered = characters?.find(({name}) => name ===characterName); 
        setSelectedCharacter(filtered)
    }

    const context = { 
        characters,
        filteredCharacters,
        filterCharacters: name => charactersFilter(name),
        selectedCharacter,
        selectCharacter: name=>changeSelected(name),
    
    }

    return(
        <CharactersContext.Provider value={context}>
            {
                children
            }
        </CharactersContext.Provider>
    )
}

export default CharacterProvider