import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'


interface TodoState {
    value: [],
    title: string,
    id: number
}

const initialState: TodoState = [
    {
        id: 1        
    }
]
