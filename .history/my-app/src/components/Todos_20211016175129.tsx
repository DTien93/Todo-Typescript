import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Todos = () => {
    const todos = useSelector(state => state.todoReducer.allTodos)
    return (
        <div className='todo-list'>
            <ul>
            {
                todos.map((todo) => (
                    <li>{todo.title}</li>
                ))
            }
          </ul>
        </div>
    )
}

export default Todos
