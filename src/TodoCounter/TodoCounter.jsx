import React from "react";

//styles
import "./TodoCounter.css";

function TodoCounter({ completedTodos, totalTodos }){
    return(
        <h2 className="todo-counter">You have {completedTodos} of {totalTodos} completed</h2>
    );
}

export { TodoCounter };