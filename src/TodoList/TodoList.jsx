import React from "react";
import { GeneralContext } from "../Context/GeneralContext";
import { TodoItem } from "../TodoItem/TodoItem";

//styles
import "./TodoList.css";


function TodoList(){
    //context
    const { searchedTodos } = React.useContext(GeneralContext);

    return(
        <ul className="todo-list">
            {
                searchedTodos.map(todo => {
                    return <TodoItem 
                                text = {todo.text} 
                                completed = {todo.completed}
                                id = {todo.id}
                                key = {todo.id}
                            />
                })
            }
        </ul>
    );
}


export { TodoList };