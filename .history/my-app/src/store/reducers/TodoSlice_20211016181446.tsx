import { createSlice } from '@reduxjs/toolkit'

interface TodoState {
    allTodos: {}
}

const initialState: TodoState = {
    allTodos: [
        {
            id: 1,
            title: 'Code Angular'
        },
        {
            id: 2,
            title: 'Code React'
        },
        {
            id: 3,
            title: 'Code Typescript'
        }
    ]
}
export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {

    }
})


// Create Reducer
const todosReducer = todoSlice.reducer

// Selector get data
export const todosSelector = (state: { todosReducer: { allTodos: any } }) => state.todosReducer.allTodos


// Export reducers
export default todosReducer
