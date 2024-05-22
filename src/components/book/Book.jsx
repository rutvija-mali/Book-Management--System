import { useState } from 'react';
import './Book.css'

function Book(props)
{
   let[isUpdating , setIsUpdating] =useState(false)
   let[updatedId , setUpdatedId] = useState(props.id);
   let[updatedTitle , setUpdatedTitle]= useState(props.title)
   let[updatedAuthor , setUpdatedAuthor]= useState(props.author)
   let[updatedPrice, setUpdatedPrice]= useState(props.price)

   function update()
   {
      
      if(isUpdating )
      {
         let book ;
         book = {
            id : updatedId,
            title : updatedTitle,
            author : updatedAuthor,
            price : updatedPrice
         }

         fetch((`http://localhost:8000/books/${props.id}`),{
            method : 'PUT',
            headers:{
               "Content-Type":"application/json"
            },
            body:JSON.stringify(book)
         })
         .then(()=>{

            let newBooks = [... props.books]
            newBooks.forEach(
              (element ,idx)=>{
                if( element.id == book.id)
                 {
                    newBooks.splice(idx ,1,book);
  
                 }
              }
             
           )
  
           props.setBooks(newBooks);
           setIsUpdating(false)

         })
       
      }else
      {
         setIsUpdating(true)
      }
   }

   function handleChangeId(event)
   {
      setUpdatedId(event.target.value)
   }
   function handleChangeTitle(event)
   {
      setUpdatedTitle(event.target.value)
   }
   function handleChangeAuthor(event)
   {
      setUpdatedAuthor(event.target.value)
   }
   function handleChangePrice(event)
   {
      setUpdatedPrice(event.target.value)
   }

   return(
    <div className="book-container">
        {
             isUpdating ?

             <input type='text'
                    value={updatedId}
                    id="input1"
                    className='book-data'
                    onChange={handleChangeId}
            /> 
            :
            <span  id="container-data1" className="book-data">{props.id}</span>
        }
        {
             isUpdating ?

             <input type='text'
                    value={updatedTitle}
                    id="input2"
                    className='book-data'
                    onChange={handleChangeTitle}
            /> 
            :
            <span id="container-data2" className="book-data">{props.title}</span>
        }

        {
             isUpdating ?

             <input type='text'
                    value={updatedAuthor}
                    id="input3"
                    className='book-data'
                    onChange={handleChangeAuthor}
            /> 
            :
            <span id="container-data3" className="book-data">{props.author} </span>
        }
        {
             isUpdating ?

             <input type='text'
                    value={updatedPrice}
                    id="input4"
                    className='book-data'
                    onChange={handleChangePrice}

            /> 
            :
            <span id="container-data4" className="book-data">{props.price}</span>
        }
       
       
       <button className="btn" id='update-btn' onClick={update}>{isUpdating ? "Save" : "Update"}</button>
       <button className="btn" id='remove-btn' onClick={()=>{props.handleRemove(props.id)}}>Remove</button>
    </div>
   )
}
export default Book;


