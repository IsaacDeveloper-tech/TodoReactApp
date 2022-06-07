import React from "react";
import { TodoItem } from "../TodoItem/TodoItem";

//styles
import "./TodoList.css";


function TodoList({ todos }){
    return(
        <ul className="todo-list">
            {
                todos.map(todo => {
                    return <TodoItem text = {todo.text} completed = {todo.completed} key = {todo.id}/>
                })
            }
        </ul>
    );
}


export { TodoList };