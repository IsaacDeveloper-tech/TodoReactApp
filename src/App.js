import './App.css';
import React from 'react';

//components
import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoSearch } from './TodoSearch/TodoSearch';
import { TodoList } from './TodoList/TodoList';
import { TodoButton } from './TodoButton/TodoButton';

function App() {
  //Get todos
  let todosLocal = localStorage.getItem("TODOS_V1");

  if(!todosLocal){
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    todosLocal = [];
  }
  else{
    todosLocal = JSON.parse(todosLocal);
  }

  //States
  const [todos, SetTodos] = React.useState(todosLocal);
  const [searchValue, SetSearchValue] = React.useState("");

  //values
  let completedTodos = todos.filter(todo => todo.completed).length;
  let totalTodos = todos.length;

  //filter todos
  let searchedTodos = [];

  if(searchValue.length >= 0){
    searchedTodos = todos.filter(todo => {
      let searchLower = searchValue.toLowerCase();
      let todoLower = todo.text.toLowerCase();

      return todoLower.includes(searchLower);
    });
  } 
  else{
    searchedTodos = todos;
  }

  return (
    <div className='app'>
      
      <TodoCounter
        completedTodos = { completedTodos }
        totalTodos = { totalTodos }
      />
      
      <TodoSearch 
        searchValue={ searchValue }
        SetSearchValue = { SetSearchValue } 
      />

      <TodoList 
        todos = { searchedTodos }
        SetTodos = { SetTodos } 
      />

      <div className='button-box'>
        <TodoButton />
      </div>

    </div>
  );
}

export default App;
