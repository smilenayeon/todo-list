import React, {useState, useContext, useRef,useEffect} from 'react'
import ItemContext from '../../item-context/ItemContext';
import './Add.css';

function Add() {
  const [newItem, setNewItem] = useState("");
  const {dispatch} = useContext(ItemContext);
  const inputRef = useRef(null);

  useEffect(() => {
    if(inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleAdd = (e)=>{
    e.preventDefault();
    if (newItem.trim() !== '') {
      dispatch({
        type: 'ADD',
        payload: { id: Date.now(), text: newItem, isComplete: false },
      });
      setNewItem(''); // Clear the input after submitting
    }
  };
  return (
    <div className="add-section">
       
        <form className='new-item-form' onSubmit={handleAdd}>
        <i className="fa-solid fa-circle-xmark add-close-button"></i>
          <label className='new-item-label' name="new-item">Add New Item</label>
            <input ref={inputRef} className='new-item-input' type="text" name="new-item" value={newItem} onChange={(e)=> setNewItem(e.target.value)}/>
          <input className='new-item-add-button' type="submit" value="Add"/>
        </form>
        
    </div>
  )
}

export default Add;