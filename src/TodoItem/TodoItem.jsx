import React from "react";

//styles
import "./TodoItem.css";


function TodoItem({ text, completed }){
    return (
        <li className={ completed ? "todo todo-completed" : "todo" }>
            <button className="todo-delete-button">x</button>
            <p>{text}</p>
        </li>
    );
}


export { TodoItem };