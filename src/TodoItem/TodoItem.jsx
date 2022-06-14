import React from "react";
import { GeneralContext } from "../Context/GeneralContext";

//styles
import "./TodoItem.css";

function TodoItem({ text, completed, id}){

    //context
    const { todos, SafeTodos } = React.useContext(GeneralContext);

    //functions
    const CompleteTodo = (id) => {
        let todoIndex = todos.findIndex(todo => todo.id === id);
        let newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        SafeTodos(newTodos);
    }

    const DeleteTodo = (id) => {
        let todoIndex = todos.findIndex(todo => todo.id === id);
        let newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        SafeTodos(newTodos);
    }

    return (
        <li className={ completed ? "todo todo-completed" : "todo" }>
            <button onClick={() => DeleteTodo(id)} className="todo-delete-button"></button>
            <button onClick={() => CompleteTodo(id)} className="todo-complete-button"></button>
            <p>{text}</p>
        </li>
    );
}


export { TodoItem };