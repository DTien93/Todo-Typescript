
import { configureStore } from '@reduxjs/toolkit'
import { todosReducer } from './reducers/TodoSlice'


// Create store save data
const store = configureStore({
    reducer: {
        todosReducer
    }
})





// Export store
export default  store