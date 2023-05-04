import {React} from "react";

function CategoryFilter({ categories,setCategorySelected }) {

  const renderButtons= categories.map(category=>{
    return <button key={category} onClick={e=>{
      e.target.className="selected"
      setCategorySelected(e.target.innerText)
    }}>{category}</button>
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
        {renderButtons}
    </div>
  );
  }

export default CategoryFilter;
