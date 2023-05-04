import {React,useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [categorySelected,setCategorySelected]=useState("All")
  const [myTasks,setMyTasks]=useState(TASKS)
  
  function checkTasks(){ 
    let newTasks=[]
    if (categorySelected!=="All"){
      TASKS.forEach(task=>{
        if ((task.category===categorySelected)===true){
          console.log(task)
          newTasks.push(task)
        }
      })
    }
  }
  checkTasks()
  console.log("myTasks: ",myTasks)
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} categorySelected={categorySelected} setCategorySelected={setCategorySelected}/>
      <NewTaskForm categories={CATEGORIES}/>
      <TaskList tasks={myTasks} categorySelected={categorySelected}/>
    </div>
  );
}

export default App;
