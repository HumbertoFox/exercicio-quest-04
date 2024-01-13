import React from "react";

const Button = ({label}) => {

    const click = () => {
        alert("A label desse botão é Baixar CV");
    };

    return <button onClick={() => click()}> {label} </button>;
};

export default Button;