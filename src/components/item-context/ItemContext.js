import React, {createContext, useReducer} from "react";

const ItemContext = createContext(null);

const initialState={
    items:[],
    itemCount:0,
    isComplete:{}
}


function itemReducer(state, action) {
    switch (action.type) {
      case 'ADD':
        const newItem = action.payload; // Assuming payload is the new item
        return {
          ...state,
          items: [...state.items, newItem],
          itemCount: state.itemCount + 1,
          isComplete: { ...state.isComplete, [newItem.id]: false }
        };
      case 'EDIT':
        const editedItem = action.payload;
        const editedItems = state.items.map(item =>
          item.id === editedItem.id ? editedItem : item
        );
        return {
          ...state,
          items: editedItems,
          // itemCount remains the same on edit
        };
      case 'TOGGLE_ISCOMPLETE':
        const itemId = action.payload;
        return {
          ...state,
          isComplete: {
            ...state.isComplete,
            [itemId]: !state.isComplete[itemId]
          }
        };
      case 'DELETE':
        const itemIdToDelete = action.payload;
        const filteredItems = state.items.filter(item => item.id !== itemIdToDelete);
        const { [itemIdToDelete]: _, ...restOfStatus } = state.isComplete;
        return {
          ...state,
          items: filteredItems,
          itemCount: state.itemCount - 1,
          isComplete: restOfStatus
        };
      default:
        throw new Error('Unhandled action type: ' + action.type);
    }
  }

  export const ItemProvider = ({children})=>{
    const [state, dispatch] = useReducer(itemReducer, initialState);

  const contextValue = {
    items: state.items,
    itemCount: state.itemCount,
    isComplete: state.isComplete,
    dispatch,
  };
return(
<ItemContext.Provider value={contextValue}>
    {children}
</ItemContext.Provider>)
  };

export default ItemContext;