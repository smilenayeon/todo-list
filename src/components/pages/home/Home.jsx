import React, {useContext} from 'react';
import ItemContext from '../../item-context/ItemContext';
import './Home.css';

function Home() {
  const { items, itemCount, isComplete} = useContext(ItemContext);
  return (
    <div className='home-section'>
     <h4 className='item-total-title'>Total items: {itemCount}</h4>
      {items.map((item)=>
        <div className='item-container'>
        <h3 className='item-text'>{item.text}</h3>
        <p className='item-status'>{isComplete[item.id] ? 'Completed' : 'Incomplete'}</p>
        </div>
        )}
      

    </div>
  )
};

export default Home