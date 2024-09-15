// features/todos/todosSlice.js
import { createSlice } from "@reduxjs/toolkit";


const loadTodosFromLocalStorage = () => {

    try {
        const serializedState = localStorage.getItem("todos");
        return serializedState ? JSON.parse(serializedState) : []
    } catch (error) {
        console.warn("Failed to load todos from localStorage", e);
        return [];
    }
}



const saveTodosToLocalStorage = (todos) => {
    try {
        const serializedState = JSON.stringify(todos);
        localStorage.setItem("todos", serializedState)
    } catch (error) {
        console.log(`failed to save state to local storage : ${error}`)
    }
}

const initialState = loadTodosFromLocalStorage();

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.unshift(action.payload);
            saveTodosToLocalStorage(state);

        },
        deleteTodo: (state, action) => {
            const newState = state.filter(todo => todo.id !== action.payload);
            saveTodosToLocalStorage(newState);
            return newState;
        },
        editTodo: (state, action) => {
            const { id, title } = action.payload;
            const todo = state.find(todo => todo.id === id);
            if (todo) {
                todo.title = title;
                saveTodosToLocalStorage(state);
            }
        },
        toggleTodoCompletion: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload);
            if (todo) {
                todo.isCompleted = !todo.isCompleted
                saveTodosToLocalStorage(state);
            }
        }
    }
});

export const { addTodo, editTodo, deleteTodo, toggleTodoCompletion } = todoSlice.actions;
export const todosReducer = todoSlice.reducer;
