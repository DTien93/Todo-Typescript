import React from 'react'
import { todosSelector } from '../store'
import { useSelector } from 'react-redux'
const Navbar = () => {
    const todos = useSelector(todosSelector)
    return (
        <div className='navbar'>
            <h2>My Todo App</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Total todo : 3</li>
            </ul>
        </div>
    )
}

export default Navbar
