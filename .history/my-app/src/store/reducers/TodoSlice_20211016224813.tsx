import { createSlice, nanoid } from '@reduxjs/toolkit'

interface TodoState {
    allTodos: {} | any | void,
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
            markComplete({ state, action }: { state: any; action: any }): void{
                const todoId = action.payload
                state.allTodos = state.allTodos.map((todo: { id: any; completed: boolean }): any => {
                    if (todo.id === todoId) todo.completed = !todo.completed
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

export const { markComplete } = todoSlice.actions

// Export reducers
export default todosReducer
