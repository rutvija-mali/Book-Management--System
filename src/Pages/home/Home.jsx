import useFetch from "../../components/useFetch";
import { useEffect, useState } from "react"
import Book from "../../components/book/Book"
import AddBook from "../../components/add/AddBook"
import './Home.css'

function Home()
{
    let { data, error } = useFetch('http://localhost:8000/books');
    let [books, setBooks] = useState(null);
  
    useEffect(()=>{
        setBooks(data);
    }, [data]);
  
  
   function handleRemove(id)
   {
    fetch((`http://localhost:8000/books/${id}`),{
      method:'DELETE',
    })
    .then(()=>{
      let newBooks = books.filter((element)=>{
         return element.id != id
  
      
      })
      setBooks(newBooks);
    })
   
  
   }
   function handleSubmit(book) {
    fetch('http://localhost:8000/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    })
        .then(() => {
            let newBooks = [...books];
            newBooks.push(book);
            setBooks(newBooks);
        })
        .catch(error => {
            console.error('Error adding book:', error);
        });
  }
    return(
        <div className="main-container">
        
            <div className="form">
            <AddBook handleSubmit={handleSubmit} />
            </div>
            
            {
            books && 
            books.map((book)=>{
    
                return  <Book 
                            key={book.id.toString()}
                            id={book.id}
                            title={book.title} 
                            author={book.author} 
                            price={book.price} 
                            books={books}
                            setBooks={setBooks}
                            handleRemove ={handleRemove}
                        />
                
            })
            }
        </div>
   
    );
}
export default Home;