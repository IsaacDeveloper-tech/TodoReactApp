import React from "react";
import { GeneralContext } from "../Context/GeneralContext";

//styles
import "./TodoButton.css";


function TodoButton() {

    //context
    const { openedModal, SetStateModal } = React.useContext(GeneralContext);

    //function
    const OnClick = () => {
        SetStateModal(openedModal => !openedModal)
    }

    return(
        <button onClick={ OnClick } className={openedModal ? "todo-button todo-button-cancel" : "todo-button"}  >+</button>
    );
}


export { TodoButton };