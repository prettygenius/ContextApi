import { useContext } from 'react'
import { BookContext } from '../context/BookContext'
function NavBar() {

    const {books} = useContext(BookContext)

  return (
    <nav className='navbar'>
        <h1>My Reading List</h1>
        <p>Currently you have {books.length} books to read...</p>
    </nav>
  )
}

export default NavBar