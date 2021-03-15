import Routes from './routes'
import CharacterProvider from './context/characterContext'
import './GlobalStyle.css'
function App() {
  return (
    <CharacterProvider>
      <Routes />
    </CharacterProvider>
  );
}

export default App;
