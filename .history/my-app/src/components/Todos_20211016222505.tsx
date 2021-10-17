import React  from 'react'
import { useSelector } from 'react-redux'
import { todosSelector } from '../store/reducers/TodoSlice'
import TodoForm from './TodoForm'

interface TodoIdDefault {
    todoId: string
}
const Todos = () => {
    const todos = useSelector(todosSelector)
    const onToggleChange = todoId : TodoIdDefault => {
        console.log(todoId)

    }
    return (
        <div className='todo-list'>
            <TodoForm/>
            <ul>
            {
                todos.map((todo: { title: string, id: string, completed: boolean }) => (
                    <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                        {todo.title}
                        <input type="checkbox"
                            checked={todo.completed}
                            onChange = {() => onToggleChange(todo.id)}
                        />
                    </li>
                ))
            }
          </ul>
        </div>
    )
}

export default Todos
