import React from "react";


function TodoItem({ text, completed }){
    return (
        <li className={ completed ? "todo todo-completed" : "todo" }>{text}</li>
    );
}


export { TodoItem };