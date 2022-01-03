import React from "react";

const personne = props => {

    return (
        <>
            <h1>{props.nom}</h1>
            <p>Age {props.age}</p>
            <p>Sexe {props.sexe}</p>
        </>
    );
}

export default personne;