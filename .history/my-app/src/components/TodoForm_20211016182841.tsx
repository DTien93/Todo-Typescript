import React, {useState} from 'react'

const TodoForm = () => {
    const [title, setTitle] = useState('')

    return (
        <div>
            <form>
                <input type="text" />
                <input type="submit" value="add" />

            </form>
        </div>
    )
}

export default TodoForm
