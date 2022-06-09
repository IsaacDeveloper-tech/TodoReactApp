import React from "react";
import { TodoItem } from "../TodoItem/TodoItem";

//styles
import "./TodoList.css";


function TodoList({ todos, SetTodos }){

    //functions
    const CompleteTodo = (id) => {
        let todoIndex = todos.findIndex(todo => todo.id === id);
        let newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        SetTodos(newTodos);
    }

    const DeleteTodo = (id) => {
        let todoIndex = todos.findIndex(todo => todo.id === id);
        let newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        SetTodos(newTodos);
    }

    return(
        <ul className="todo-list">
            {
                todos.map(todo => {
                    return <TodoItem 
                                text = {todo.text} 
                                completed = {todo.completed}
                                OnComplete = { () => { CompleteTodo(todo.id) } }
                                OnDelete = { () => { DeleteTodo(todo.id) } }
                                key = {todo.id}
                            />
                })
            }
        </ul>
    );
}


export { TodoList };