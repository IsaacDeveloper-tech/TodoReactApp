import './AppUI.css';
import React from 'react';

//components
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoButton } from '../TodoButton/TodoButton';
import { TodoModal } from '../Modal/TodoModal';

//portal
import { Modal } from '../Modal/Modal';

//context
import { GeneralContext } from '../Context/GeneralContext';

function AppUI() {
  //state
  const { openedModal } = React.useContext(GeneralContext);

  return (
    <div className='app'>
        
        <TodoCounter />
        
        <TodoSearch />

        <TodoList />

        <div className='button-box'>
            <TodoButton />
        </div>

        <Modal>
            {openedModal && (<TodoModal />)}
        </Modal>
    </div>
  );
}

export { AppUI };