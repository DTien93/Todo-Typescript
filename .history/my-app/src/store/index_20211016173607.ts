import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'


interface TodoState {
    value: []
}

const initialState: TodoState = [
    
]
const todoSlice = createSlice({
    name: 'todos'
})