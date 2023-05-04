import {React} from "react";


function Task(props) {
  return (
    <div className="task">
      <div className="label">{props.category}</div>
      <div className="text">{props.text}</div>
      <button className="delete" onClick={e=>e.target.remove()}>X</button>
    </div>
  );
}

export default Task;
