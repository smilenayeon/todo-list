import React, { useContext } from "react";
import ItemContext from "../../item-context/ItemContext";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Progress.css";

function Progress() {
  const { items, itemCount, isComplete } = useContext(ItemContext);
  const completedItemCount = items.filter(item => isComplete[item.id] === true)
    .length;
  const incompleteItemCount = items.filter(
    item => isComplete[item.id] === false
  ).length;
  const completedPercentage = ((completedItemCount / itemCount) * 100).toFixed(0);
  return (
    <div className="progress-section">
     <h1>Progress</h1>
      <div className="progressbar">
        <CircularProgressbar
          value={completedPercentage}
          text={isNaN(completedPercentage) ? 'no item' : `${completedPercentage}%`}
          styles={buildStyles({
            pathColor: `rgba(62, 152, 199, ${completedPercentage / 100})`,
            textColor: "#3e98c7",
            trailColor: "#d6d6d6",
            backgroundColor: "#3e98c7"
          })}
        />
      </div>

     
      <h3 className="progress-total-item">
        Total item: {itemCount}
      </h3>
      <h3 className="progress-completed-item">
        Completed item: {completedItemCount}
      </h3>
      <h3 className="progress-incomplet-item">
        Incomplete item: {incompleteItemCount}
      </h3>

      
    </div>
  );
}

export default Progress;
