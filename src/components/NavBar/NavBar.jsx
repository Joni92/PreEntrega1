import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
  return (
    <nav className='container'>
        <h3 className='title'>Ecommerce</h3>
        <div className='nav-btn'>
            <button>Tech</button>
            <button>Indumentaria</button>
            <button>Hogar</button>
        </div>    
        <CartWidget/>
    </nav>
  )
}

export default NavBar