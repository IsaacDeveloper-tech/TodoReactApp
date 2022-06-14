import React from "react";
import { GeneralContext } from "../Context/GeneralContext";

//styles
import "./TodoCounter.css";

function TodoCounter(){

    //context
    const { completedTodos, totalTodos } = React.useContext(GeneralContext);

    return(
        <h2 className="todo-counter">You have {completedTodos} of {totalTodos} completed</h2>
    );
}

export { TodoCounter };