import React from "react";

interface Props {
    removeTodo: any
    text: string
};

const Todo: React.FunctionComponent<Props> = (props) => {
    return <li>{props.text}
        <button onClick={props.removeTodo}>X</button>
    </li>;
};

export default Todo;