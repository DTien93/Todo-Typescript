import React, {useState} from 'react'

const TodoForm = () => {
    const [title, setTitle] = useState('')

    const onChangeTitle = (e: any) => {
        setTitle(e.target.value)
        console.log(title)
    }
    const onhandleSubmit= (e:any) => {

    }
    return (
        <div>
            <form onSubmit={onhandleSubmit}>
                <input type="text" value={title} onChange = {onChangeTitle} />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default TodoForm
