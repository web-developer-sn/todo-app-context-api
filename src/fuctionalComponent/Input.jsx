import React, { useContext, useEffect, useState } from 'react'
import store from '../store/store'

export default function Input() {
    let { addTodo, editData ,updateTodo} = useContext(store)
        //  console.log(editData);

    let [todo, setTodo] = useState('')
    let [err, setErr] = useState(false)

    const inputchange = (event) => {
        setTodo(event.target.value)
        if (event.target.value.length > 0) {
            setErr(false)
        }
        else {
            setErr(true)
        }
    }

    const submit = (event) => {
        event.preventDefault()
        // console.log(event.target.value);
        if (todo.length > 0) {
            if(editData.index !==-1){
                updateTodo(editData.index,todo)
            }
            else{
                addTodo(todo)
            }
            setTodo('')
        }
        else {
            setErr(true)
        }


    }
    useEffect(()=>{
        setTodo(editData.data)
    },[editData.index,editData.data])

    return (
        <form className="row g-3" onSubmit={submit}>

            <div className="col-10">

                <input type="text"
                    className="form-control"
                    placeholder="Enter Todo"
                    value={todo}
                    onChange={inputchange}

                />
                {
                    err && <p className='text-danger'>Pls enter todo </p>
                }
            </div>
            <div className="col-2">
                <button type="submit" className="btn btn-primary mb-3">
                    {
                        editData.index ===-1 ? "Add" :"Update"
                    }
                </button>
            </div>
        </form>
    )
}
