import React, { useContext } from 'react'
import store from '../store/store'

export default function List() {
    let { todos,editTodo, deleteTodo } = useContext(store)
    //    console.log(todos);
    // console.log(deleteTodo);

    return (
        <ul className="list-group">
            {
                todos.length > 0 ? todos.map((todos, index) => {
                    return <li className="list-group-item d-flex justify-content-between" key={index}>
                        <div>
                            {todos}
                        </div>
                        <div>
                            <button className='btn btn-warning mx-2' onClick={()=>editTodo(index,todos)}>Edit</button>
                            <button className='btn btn-danger' onClick={() => deleteTodo(todos)}>Delete</button>
                        </div>
                    </li>
                }) : <li className="list-group-item">Add Todo</li>
            }


        </ul>
    )
}
