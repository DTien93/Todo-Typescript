import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'


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

// Reducer
// Create Reducer
const todosReducer = todoSlice.reducer

// Create store save data
const store = configureStore({
    reducer: {
        todosReducer
    }
})


// Selector get data

// Export store
export default  store