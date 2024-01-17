import { useContext, useState } from "react"
import { BookContext } from "../context/BookContext"

function BookForm() {
  const {addBook} = useContext(BookContext)
  const [author , setAuthor] = useState("")
  const [title , setTitle] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    addBook(title,author)
    setTitle("")
    setAuthor("")
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" placeholder="book title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
      <input type="text" placeholder="book author" value={author} onChange={(e) => setAuthor(e.target.value)} required/>
      <button onClick={addBook} value="add book">Add Book</button>
    </form>
  )
}

export default BookForm