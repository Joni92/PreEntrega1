
import './App.css'
import Navbar from './components/NavBar/NavBar' 
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() { 

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={'Bienvenido'}/> 
    </>
  )
}

export default App
