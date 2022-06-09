import './App.css';
import React from 'react';

//components
import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoSearch } from './TodoSearch/TodoSearch';
import { TodoList } from './TodoList/TodoList';
import { TodoButton } from './TodoButton/TodoButton';

const list = [
  {id: 0, text: "do something", completed: false},
  {id: 1, text: "speak with someone", completed: true},
  {id: 2, text: "play the guitar", completed: false},
  {id: 3, text: "write a book", completed: false},
]

function App() {

  //States
  const [todos, SetTodos] = React.useState(list);
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
