import './App.css';
import React from 'react';

//components
import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoSearch } from './TodoSearch/TodoSearch';
import { TodoList } from './TodoList/TodoList';
import { TodoButton } from './TodoButton/TodoButton';

//context
import { GeneralContextProvider } from './Context/GeneralContext';

function App() {

  return (
    <GeneralContextProvider>
      <div className='app'>
        
        <TodoCounter />
        
        <TodoSearch />

        <TodoList />

        <div className='button-box'>
          <TodoButton />
        </div>

      </div>
    </GeneralContextProvider>
    
  );
}

export default App;
