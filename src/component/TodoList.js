import React from "react"


function TodoList(props){
    return (
        <div className='todo-item'>
            <input onChange={() => {props.handleChange(props.todo.id)}} type='checkbox' checked={props.todo.completed}/>
            <h2>{props.todo.text}</h2>
        </div>
    )
}

export default TodoList