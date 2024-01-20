import React from "react";

const Button = ({label}) => {

    return <button onClick={() => alert('A label desse botão é "Baixar CV"')}> {label} </button>;
};

export default Button;