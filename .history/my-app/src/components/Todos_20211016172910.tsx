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
        }
    ])
    return (
        <div className='todo-list'>
            
        </div>
    )
}

export default Todos
