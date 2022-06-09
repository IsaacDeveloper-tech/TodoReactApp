import React from "react";

//styles
import "./TodoItem.css";

function TodoItem({ text, completed, OnComplete, OnDelete }){

    return (
        <li className={ completed ? "todo todo-completed" : "todo" }>
            <button onClick={OnDelete} className="todo-delete-button"></button>
            <button onClick={OnComplete} className="todo-complete-button"></button>
            <p>{text}</p>
        </li>
    );
}


export { TodoItem };