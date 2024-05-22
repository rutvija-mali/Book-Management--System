import './AddBook.css'
import { useState } from 'react';

function AddBook(props)
{
    const [enteredId, setEnteredId] = useState("");
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAuthor, setEnteredAuthor] = useState("");
    const [enteredPrice, setEnteredPrice] = useState("");


    function handleSubmit(event) {
        event.preventDefault();
        let book = {
            id: enteredId,
            title: enteredTitle,
            author: enteredAuthor,
            price: enteredPrice
        }

        props.handleSubmit(book);

        setEnteredId("");
        setEnteredTitle("");
        setEnteredAuthor("");
        setEnteredPrice("");
    }
    function handleChangeId(event){
        setEnteredId(event.target.value);
    }
    function handleChangeTittle(event){
        setEnteredTittle(event.target.value) 
    }
    function handleChangeAuthor(event){
        setEnteredAuthor(event.target.value)
    }
    function handleChangePrice(event)
    {
        setEnteredPrice(event.target.value)
    }
    return(
        <div className="form-container" onSubmit={handleSubmit}>
            <form action="">
                <div className='section'>
                    <label className='lable'>Id</label>
                    <input type="text" id='id' onChange={handleChangeId}  value={enteredId} />
                </div>
                <div className='section'>
                    <label className='lable'>Title </label>
                    <input type="text" id='title' onChange={handleChangeTittle} value={enteredTitle}/>
                </div>
                <div className='section'>
                    <label className='lable'>Author </label>
                    <input type="text" id='author' onChange={handleChangeAuthor} value={enteredAuthor}/>
                </div>
                <div className='section'>
                    <label className='lable'>Price</label>
                    <input type="text"  id='price' onChange={handleChangePrice}  value={enteredPrice}/>
                </div>
                <div id='add' className='section'>
                   <input type="submit"  value="Add" />
                </div>
            </form>
        </div>
    )
}

export default AddBook;