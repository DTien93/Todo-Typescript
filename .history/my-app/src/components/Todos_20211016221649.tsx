import React  from 'react'
import { useSelector } from 'react-redux'
import { todosSelector } from '../store/reducers/TodoSlice'
import TodoForm from './TodoForm'

const Todos = () => {
    const todos = useSelector(todosSelector)
    return (
        <div className='todo-list'>
            <TodoForm/>
            <ul>
            {
                todos.map((todo: { title: string, id: number, completed: boolean }) => (
                    <li key={todo.id}>
                        {todo.title}
                        <input type="checkbox" checked={todo.completed } />
                    </li>
                ))
            }
          </ul>
        </div>
    )
}

export default Todos
