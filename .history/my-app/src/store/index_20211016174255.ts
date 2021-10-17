import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'


interface TodoState<type:[]> {
  
}

const initialState: TodoState = [
    {
        id: 1,
        title: 'Code Angular'
    },
    {
        id: 2,
        title: 'Code React'
    }
]

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {

    }
})
