import React, { useState } from 'react'

const Todos = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Code Angular'
        },
        {
            id: 2,
            title: 'Code Typescript'
        },
        {
            id: 3,
            title: 'Code React'
        }
    ])
    return (
        <div className='todo-list'>
            {
                todos.map((todo) => (
                    <p>{todo.title}</p>
                ))
            }
        </div>
    )
}

export default Todos
