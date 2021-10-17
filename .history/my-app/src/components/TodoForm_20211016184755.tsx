import React, {useState} from 'react'
import { addTodo } from '../store/reducers/TodoSlice'
// Dispatch action
import { useDispatch } from 'react-redux'

const TodoForm = () => {
    const [title, setTitle] = useState('')

    const onChangeTitle = (e: any) => {
        setTitle(e.target.value)
    }
    const onHandleSubmit= (e:any) => {
        e.preventDefault()
        
    }
    return (
        <div>
            <form onSubmit={onHandleSubmit}>
                <input type="text" value={title} onChange = {onChangeTitle} />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default TodoForm
