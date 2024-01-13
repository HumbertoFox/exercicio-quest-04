import React from "react";

const Texto = ({paragraph}) => {

    return <p color="red" style={{textTransform: "uppercase", color: "red", fontWeight: "bold"}}> {paragraph} </p>;
};

export default Texto;