import React, { useState, useContext } from 'react';
import ItemContext from '../../item-context/ItemContext';

function EditItem({ item, onDone }) {
  const [editText, setEditText] = useState(item.text);
  const { dispatch } = useContext(ItemContext);

  const handleSave = () => {
    dispatch({
      type: 'EDIT',
      payload: { ...item, text: editText }
    });
    onDone(); 
  };

  return (
    <div>
      <input 
        type="text" 
        value={editText} 
        onChange={(e) => setEditText(e.target.value)} 
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default EditItem;