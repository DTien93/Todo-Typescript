
import { configureStore } from '@reduxjs/toolkit'



// Create store save data
const store = configureStore({
    reducer: {
        todosReducer
    }
})


// Selector get data
export const todosSelector = (state: { todosReducer: { allTodos: any } }) => state.todosReducer.allTodos

// Export store
export default  store