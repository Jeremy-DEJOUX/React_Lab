import React, {Component} from "react";
import Bouton from "../../../components/Boutons/Bouton";

const Livre = (props) => (
    <>
        <td>{props.titre}</td>
        <td>{props.auteur}</td>
        <td>{props.nbPages}</td>
        <td><Bouton typeBtn="btn-warning" click={() => console.log('Modification')}>Modifier</Bouton></td>
        <td><Bouton typeBtn="btn-danger" click={() => console.log('Suppression')}>Supprimer</Bouton></td>
    </>
);

export default Livre;