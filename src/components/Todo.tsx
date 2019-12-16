import React from "react";

interface Props {
    text: string
};

const Todo: React.FunctionComponent<Props> = (props) => {
    return <li>{props.text}</li>;
};

export default Todo;