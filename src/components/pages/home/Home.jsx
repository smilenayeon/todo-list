import React, { useState, useContext } from "react";
import ItemContext from "../../item-context/ItemContext";
import "./Home.css";
import EditItem from "./EditItem";

function Home() {
  const { items, itemCount, isComplete, dispatch } = useContext(ItemContext);
  const [editItemId, setEditItemId] = useState(null);

  const handleCheckboxChange = itemId => {
    dispatch({
      type: "TOGGLE_ISCOMPLETE",
      payload: itemId
    });
  };
  const handleEdit = targetItemId => {
    setEditItemId(targetItemId);
  };

  const handleSave = () => {
    setEditItemId(null); // Reset editItemId after save
  };

  const handleDelete = itemId => {
    dispatch({
      type: "DELETE",
      payload: itemId
    });
  };

  return (
    <div className="home-section">
      <h4 className="item-total-title">
        Total items: {itemCount}
      </h4>

      {items.map(item =>
        <div key={item.id} className="item-container">
          {editItemId === item.id
            ? <EditItem item={item} onDone={handleSave} />
            : <div>
                <h3
                  className={`item-text ${isComplete[item.id]
                    ? "line-through"
                    : ""}`}
                >
                  {item.text}
                </h3>
                <div className="item-control">
                  <div className="item-status">
                    <input
                      type="checkbox"
                      checked={isComplete[item.id] || false}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                    {isComplete[item.id] ? "Completed" : "Incomplete"}
                  </div>
                  <div
                    className="item-edit-button"
                    onClick={() => handleEdit(item.id)}
                  >
                    <p><i className="fa-regular fa-pen-to-square" /> Edit</p>
                  </div>
                  <div
                    className="item-delete-button"
                    onClick={() => handleDelete(item.id)}
                  >
                    <p><i className="fa-solid fa-trash" /> Delete</p>
                  </div>
                </div>
              </div>}
        </div>
      )}
    </div>
  );
}

export default Home;
