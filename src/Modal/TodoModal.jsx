import React from "react";
import { GeneralContext } from "../Context/GeneralContext";
import "./TodoModal.css";

function TodoModal(){

    //state of text input
    const [ text, SetText ] = React.useState("");

    //context
    const { AddTodo, searchedTodos } = React.useContext(GeneralContext);

    //functions
    const OnChange = (event) => {
        SetText(event.target.value);
    }

    const OnClick = (text) => {
        AddTodo(searchedTodos, text);
    }

    return (
        <div className="form-box">
            <form className="todo-form">
                <label className="todo-form-title">Create new "ToDo"</label>
                <textarea value={text} onChange = {OnChange} className="todo-form-text" cols="30" rows="10" placeholder="Some task..."></textarea>
                <button onClick={() => OnClick(text)} className="todo-form-create">Create</button>
            </form>
        </div>
    );
}


export { TodoModal };