// Declare Redux Types for Adding or deleting todos

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

interface AddTodoAction {
    type: typeof ADD_TODO,
    text: string,
};

interface DeleteTodoAction {
    type: typeof DELETE_TODO,
    id: number
};

export type TodoActionTypes = AddTodoAction | DeleteTodoAction;

// State interfaces

export interface Task {
    text: string,
    id: number
};

export interface TodoListState {
    todos: Task[],
    iterator: number
};