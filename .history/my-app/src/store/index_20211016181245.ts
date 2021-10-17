
import { configureStore } from '@reduxjs/toolkit'



// Create store save data
const store = configureStore({
    reducer: {
        todosReducer
    }
})





// Export store
export default  store