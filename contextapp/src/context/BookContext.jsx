import { createContext, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';


export const BookContext = createContext()

function BookContextProvider(props) {
    
    const [books, setBooks] = useState([
    {title: 'Twilight', author: 'Stephenie Meyer', id: 1},
    {title: 'Twilight: new moon', author: 'Stephenie Meyer', id: 2},
    {title: 'Twilight: eclipse', author: 'Stephenie Meyer', id: 3},])

        //add new title and new author
       function addBook(title,author){
        //grabs previous books adds new object of book properties
        setBooks([...books,{title:title,author:author,id: uuidv4()}])
    }
    //take in id of book and remove the one you don't want 
    function removeBook(id){
        //filter out id that matches id to be removed
        //if true its not equal or a match so keep in array
        setBooks(books.filter((book) => book.id !== id))
    }
    return(
  <BookContext.Provider value={{books, addBook, removeBook}}>
    {props.children}
  </BookContext.Provider>
  )}  

export default BookContextProvider