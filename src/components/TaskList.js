import React from "react";
import Task from "./Task";


function TaskList({ tasks,deleter }) {
   const tasksToDisplay= tasks.map((obj)=>{
      return <Task deleter={deleter} key={obj.text} text={obj.text} label={obj.category}/>
    })
  
  return (
    <div className="tasks">
      {tasksToDisplay}
    </div>
  )
  }

export default TaskList;
