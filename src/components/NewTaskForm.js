import { React,useState } from "react";
import { TASKS } from "../data";

function NewTaskForm({ categories,categorySelected }) {
  const [formCategory,setFormCategory]=useState("")
  const [formName,setFormName]=useState("")
  function handleSubmit(e){
    e.preventDefault()
    const newFormItem={
      text: formName,
      category: formCategory
    }
    TASKS.push(newFormItem)
  }
  const renderCategories=(categories).map(category=>{
    if (category!=="All"){return <option key={category}>{category}</option>}
  })
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={(e)=>setFormName(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" onSelect={e=>setFormCategory(e.target.innerText)}>
         {renderCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
