import './App.css';
import React from 'react';

const list = [
  {id: 0, text: "do something", completed: false},
  {id: 1, text: "speak with someone", completed: true},
  {id: 2, text: "play the guitar", completed: false},
  {id: 3, text: "write a book", completed: false},
]

function App() {
  return (
    <React.Fragment>

      <h2>You have 2 of 4 completed</h2>
      
      <input placeholder='Search some "todo"'></input>

      <ul>
        {list.map(todo => {return <li>{todo.text}</li>})}
      </ul>

      <button>Create Todo</button>
      
    </React.Fragment>
  );
}

export default App;
