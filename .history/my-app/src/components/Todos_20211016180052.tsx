import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { todosSelector } from '../store'

const Todos = () => {
    
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
