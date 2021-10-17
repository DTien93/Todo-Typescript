import React, { useState } from 'react'

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
