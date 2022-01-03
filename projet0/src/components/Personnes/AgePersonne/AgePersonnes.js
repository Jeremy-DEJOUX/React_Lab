import React from "react";

const agePersonne = (props) => {
    let now = new Date();
    let year = now.getFullYear();
    return <div>Age : {props.age} - ({year - props.age})</div>
}

export default agePersonne;