import React, { useContext, useState } from 'react'
import store, { initialState } from '../store/store'

export default function TodoContextProvider(props) {


    let [todos, setTodos] = useState(['breakfast', 'lunch', 'dinner'])
    let [editData, setEditData] = useState({
        index: -1,
        data: ''
    })



    const addTodo = (value) => {
        setTodos([...todos, value])
    }
    const editTodo = (index, data) => {
        setEditData({
            index,
            data
        })
    }




    const deleteTodo = (value) => {
        let filteredTodos = todos.filter((todo) => todo !== value)
        setTodos(filteredTodos)
    }

    const updateTodo = (index, data) => {
        todos.splice(index, 1, data)

        setTodos([...todos])

        setEditData({
            index: -1,
            data: ''
        })
    }
    return (
        <store.Provider value={{
            ...initialState,
            todos,
            addTodo,
            editData,
            editTodo,
            deleteTodo,
            updateTodo
        }}>
            {
                props.children
            }
        </store.Provider>
    )
}
