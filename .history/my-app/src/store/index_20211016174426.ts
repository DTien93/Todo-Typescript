import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'


interface TodoState {
    allTodos: []
}

const initialState: TodoState = {
    allTodos: [
        {

        }
    ]
}
export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {

    }
})
