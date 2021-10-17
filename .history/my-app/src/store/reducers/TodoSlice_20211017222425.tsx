import { createSlice, nanoid } from '@reduxjs/toolkit'
import axios from 'axios'

interface TodoState {
    allTodos: {} | any | void ,
}

const initialState: TodoState = {
    allTodos: [
        
    ]
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        deleteTodo(state: { allTodos: any[] }, action: { payload: any }) {
            const todoId = action.payload
            // Save all  post todo difficult todo save 
            state.allTodos = state.allTodos.filter((todo: { id: any }) => todo.id !== todoId )
        },
        markComplete(state, action){
            const todoId = action.payload
            state.allTodos = state.allTodos.map((todo: { id: any; completed: boolean }): any => {
                if (todo.id === todoId) todo.completed = !todo.completed
                return todo
            })
       },
        addTodo: {
            reducer(state, action) {
                state.allTodos.unshift(action.payload)
            },
            prepare(title: any): any {
                return  {
                    payload: {
                        id: nanoid(),
                        title,
                        completed: false
                    }
                }
            },
            async getAllTodos(state: { allTodos: unknown }, action: any): Promise<void> {
                try {
                    const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
                    state.allTodos = res.data
                } catch (err) {
                    console.log(err)
                }
            },
        }
    }
})

// Create Reducer
const todosReducer = todoSlice.reducer

// Selector get data
export const todosSelector = (state: { todosReducer: { allTodos: any } }) => state.todosReducer.allTodos

// Export action 
export const { getAllTodos, addTodo, markComplete, deleteTodo } = todoSlice.actions
 

// Export reducers
export default todosReducer
