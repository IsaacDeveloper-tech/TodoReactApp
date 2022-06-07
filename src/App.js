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
  return (
    <div className='app'>
      
      <TodoCounter />
      
      <TodoSearch />

      <TodoList todos = { list } />

      <div className='button-box'>
        <TodoButton />
      </div>

    </div>
  );
}

export default App;
