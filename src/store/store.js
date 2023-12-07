import { createContext } from "react";

 export const initialState={
    todos:[],
    addTodo:(value)=>{},
    editData:{index:-1,data:''},
    deleteTodo:(value)=>{},
    editTodo: (index, data) => {},
    updateTodo:(index,data)=>{}
    

}

 let store=createContext(initialState)

export default store