import React, {useState} from 'react'

const TodoForm = () => {
    const [title, setTitle] = useState('')

    const onChangeTitle = (e: any) => {
        setTitle(e.target.value)
        console.log(title)
    }
    return (
        <div>
            <form>
                <input type="text" value={title} onChange = {onChangeTitle} />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default TodoForm
