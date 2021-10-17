import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { todosSelector } from '../store'

const Todos = () => {
    const todos = useSelector(todosSelector)
    return (
        <div className='todo-list'>
            <ul>
            {
                todos.map((todo: { title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined }) => (
                    <li>{todo.title}</li>
                ))
            }
          </ul>
        </div>
    )
}

export default Todos
