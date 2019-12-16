import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { TodoListState, Task, DELETE_TODO } from '../types';
import { useSelector, useDispatch } from 'react-redux';

// hook callback
const selectTodos = (state: TodoListState): Task[] => state.todos;

const TodoList: React.FunctionComponent = (props) => {

    // Hook to select todos from Redux
    const todos: Task[] = useSelector(selectTodos);

    // Add remove todos with use dispatch
    const dispatch = useDispatch();

    const removeTodo = (id: number) => {
        dispatch({
            type: DELETE_TODO,
            id
        });
    };

    return (
        <div>
            <TodoForm />
            <ul>
                {todos.map((task: Task, index: number) => <Todo removeTodo={() => removeTodo(task.id)} text={task.text} key={index}></Todo>)}
            </ul>
        </div>
    );
}

export default TodoList;