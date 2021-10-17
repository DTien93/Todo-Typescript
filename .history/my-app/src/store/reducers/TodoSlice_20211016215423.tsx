import { createSlice, nanoid } from '@reduxjs/toolkit'

interface TodoState {
    allTodos: {} | any,
}

const initialState: TodoState = {
    allTodos: [
        {
            id: 1,
            title: 'Code Angular',
            completed: false
        },
        {
            id: 2,
            title: 'Code React',
            completed: false
        },
        {
            id: 3,
            title: 'Code Typescript',
            completed: false
        }
    ]
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: [
            
        ]
    }
})


// Create Reducer
const todosReducer = todoSlice.reducer

// Selector get data
export const todosSelector = (state: { todosReducer: { allTodos: any } }) => state.todosReducer.allTodos

// Export action 
export const { addTodo } = todoSlice.actions

// Export reducers
export default todosReducer
