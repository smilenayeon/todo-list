import React, {useContext} from 'react';
import ItemContext from '../../item-context/ItemContext';

function Home() {
  const { items, itemCount, isComplete} = useContext(ItemContext);
  return (
    <div className='home-section'>
    <div className='display-board'>
      {items.map((item)=>
        <div>
        <h3>{item.text}</h3>
        <p>{isComplete[item.id] ? 'true' : 'false'}</p>
        </div>
        )}
       <h4>Total itmes: {itemCount}</h4>
    </div>

    </div>
  )
};

export default Home