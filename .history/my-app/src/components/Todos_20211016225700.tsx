import React  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todosSelector, markComplete } from '../store/reducers/TodoSlice'
import TodoForm from './TodoForm'

const Todos = () => {
    const dispatch = useDispatch()
    const todos = useSelector(todosSelector)
    const onToggleChange = (todoId: string)  => {
        dispatch(markComplete(todoId))
    }

    const onHandleDelete = ()
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
                        <button onClick={() => onHandleDelete(todo.id)}>Delete</button>
                    </li>
                ))
            }
          </ul>
        </div>
    )
}

export default Todos
