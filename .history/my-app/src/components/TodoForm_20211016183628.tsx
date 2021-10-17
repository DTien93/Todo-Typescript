import React, {useState} from 'react'

const TodoForm = () => {
    const [title, setTitle] = useState('')

    const onChangeTitle = (e: any) => {
        setTitle(e.target.value)
    }
    const onHandleSubmit= (e:any) => {
        e.preventDefault()
        console.log(title)
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
