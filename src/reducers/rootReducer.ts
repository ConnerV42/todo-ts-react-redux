import { ADD_TODO, DELETE_TODO, TodoActionTypes, TodoListState, Task } from '../types';

const initialState: TodoListState = {
    todos: [],
    iterator: 0
};

export default function rootReducer(state = initialState, action: TodoActionTypes): TodoListState {
    switch (action.type) {
        case ADD_TODO:
            let newState: TodoListState = { ...state };
            newState.iterator++;
            let newTask: Task = { text: action.text, id: newState.iterator };
            let newTodoListState: TodoListState = { ...newState, todos: [...newState.todos, newTask] };
            return newTodoListState;
        case DELETE_TODO:
            let newTodos = state.todos.filter(todo => todo.id !== action.id);
            return {
                ...state,
                todos: newTodos
            };
        default:
            return state;
    }
}