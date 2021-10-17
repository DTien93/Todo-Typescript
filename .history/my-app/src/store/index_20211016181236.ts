
import { configureStore } from '@reduxjs/toolkit'
import {todoReducer} from './reducers/TodoSlice'


// Create store save data
const store = configureStore({
    reducer: {
        todosReducer
    }
})





// Export store
export default  store