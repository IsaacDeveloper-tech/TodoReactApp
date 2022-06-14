import React from "react";
import { GeneralContext } from "../Context/GeneralContext";

//styles
import "./TodoSearch.css";

function TodoSearch(){

    //context
    const { searchValue, SetSearchValue } = React.useContext(GeneralContext);

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