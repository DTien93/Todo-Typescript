import React, {useState} from 'react'

const TodoForm = () => {
    const [title, setTitle] = useState('')

    const onChangeTitle = () => {
        
    }
    return (
        <div>
            <form>
                <input type="text" value={title} onChange = {onChangeTitles} />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default TodoForm
