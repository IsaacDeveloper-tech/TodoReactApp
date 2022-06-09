import React from "react";

//styles
import "./TodoSearch.css";

function TodoSearch({ searchValue, SetSearchValue }){

    const OnSearchTodo = (event) => {
        SetSearchValue(event.target.value);
    }

    return(
        <input 
            className="todo-search" 
            placeholder='Search some "todo"'
            onChange={OnSearchTodo}
            value = {searchValue}
        />
    );
}


export { TodoSearch };