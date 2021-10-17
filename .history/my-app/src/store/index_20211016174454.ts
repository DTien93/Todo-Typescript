import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'


interface TodoState {
    allTodos: [{}]
}

const initialState: TodoState = {
    allTodos: [
        {
            id: 1,
            title: 'Code Angular'
        }
    ]
}
export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {

    }
})
