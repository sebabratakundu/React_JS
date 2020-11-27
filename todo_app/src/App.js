import React, { useState } from "react";
import TodoList from "./TodoList";
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const App  = () => {
  const [items,setItems] = useState("");
  const [todoListItems,setTodoList] = useState([]);

  const todoItems = (event) => {
    setItems(event.target.value);
  }

  const setTodo = () => {
    setItems("");
    setTodoList((oldValue)=>{
      return [
        ...oldValue,
        items
      ]
    })
  }

  // const deleteItem = (id) => {
  //   setTodoList((oldArr) => {
  //     return oldArr.filter((item,index) => {
  //       return index !== id;
  //     });
  //   });
  // }

  return(
    <>
      <div>
        <h1>ToDo List</h1>
        <input type="text" placeholder="please write something" onChange={todoItems} value={items} />
        <Button
        variant="contained"
        color="primary"
        onClick={setTodo}
        className="add-btn"
      >
      <AddIcon/>
      </Button>
        <hr color="#ddd"/>
        
        <ol>
          {todoListItems.map((todoListItem,index)=>{
            return <TodoList key={index} id={index} text={todoListItem}/> //we remove the onSelect={deleteItem} form here
          })}
        </ol>
      </div>
    </>
  )
}

export default App;