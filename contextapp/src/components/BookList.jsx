import {useContext} from 'react'
import {BookContext} from '../context/BookContext'
import BookDetails from './BookDetails'

function BookList() {
  const { books } = useContext(BookContext)
  return (books.length  > 0 ?(
    <div className='book-list'>
      <ul>
      {books.map(book => {
        return ( <BookDetails book={book} key={book.id}/> )
    })}
      </ul>
    </div>
  ) : (
    <div className="empty">No books remaining.</div>
  )
)}

export default BookList