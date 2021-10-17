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
            completed: true
        }
    ]
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: {
            reducer(state, action) {
                state.allTodos.unshift( action.payload)
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
            markComplete(state: void | any, action: void | any) {
                const todoId = action.payload
                state.allTodos = state.allTodos.map(todo => {
                    if (todo.id === todoId) !todo.completed = !todo.completed
                    return todo
                })
           }
        }
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
