import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './store/TodoSlice';  // Use named import

const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
});

export default store;
