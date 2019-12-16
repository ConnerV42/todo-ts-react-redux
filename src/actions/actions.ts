import { ADD_TODO, DELETE_TODO, TodoActionTypes } from '../types';

export function addTodo(text: string): TodoActionTypes {
    return {
        type: ADD_TODO,
        text
    };
}

export function deleteTodo(id: number): TodoActionTypes {
    return {
        type: DELETE_TODO,
        id
    };
}