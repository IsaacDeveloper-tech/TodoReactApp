import React from "react";
import { TodoItem } from "../TodoItem/TodoItem";


function TodoList({ todos }){
    return(
        <ul>
            {
                todos.map(todo => {
                    return <TodoItem text = {todo.text} completed = {todo.completed} />
                })
            }
        </ul>
    );
}


export { TodoList };