import React, { useState } from "react";
import { useDispatch } from 'react-redux';

const TodoForm: React.FunctionComponent = () => {
    // Hook that returns reference to the dispatch function from Redux store
    const dispatch = useDispatch();

    // setState hook returns stateful value and updater function
    const [input, setInput] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();

        dispatch({
            type: "ADD_TODO",
            text: input
        });

        setInput("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>New Todo: </label>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default TodoForm;