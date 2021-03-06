import React from "react";


const GeneralContext = React.createContext();

function GeneralContextProvider(props){

    //Get todos
    let todosLocal = localStorage.getItem("TODOS_V1");

    if(!todosLocal){
        localStorage.setItem("TODOS_V1", JSON.stringify([]));
        todosLocal = [];
    }
    else{
        todosLocal = JSON.parse(todosLocal);
    }

    //States
    const [todos, SetTodos] = React.useState(todosLocal);
    const [searchValue, SetSearchValue] = React.useState("");
    const [openedModal, SetStateModal] = React.useState(false);

    //values
    let completedTodos = todos.filter(todo => todo.completed).length;
    let totalTodos = todos.length;

    //filter todos
    let searchedTodos = [];

    if(searchValue.length >= 0){
        searchedTodos = todos.filter(todo => {
            let searchLower = searchValue.toLowerCase();
            let todoLower = todo.text.toLowerCase();

            return todoLower.includes(searchLower);
        });
    } 
    else{
        searchedTodos = todos;
    }

    //functions
    const SafeTodos = (todos) => {
        let tosafe = JSON.stringify(todos);
        localStorage.setItem("TODOS_V1", tosafe);
        SetTodos(todos); 
    }

    const AddTodo = (todos, text) => {
        let copy = [...todos];
        copy.push({
            id: copy.length,
            text: text,
            completed: false
        });

        SafeTodos(copy);
    }

    return (
        <GeneralContext.Provider value={{
            todos,
            completedTodos,
            totalTodos,
            searchValue,
            SetSearchValue,
            searchedTodos,
            SafeTodos,
            openedModal,
            SetStateModal,
            AddTodo
        }}>
            {props.children}
        </GeneralContext.Provider>
    );
}


export { GeneralContext, GeneralContextProvider };