import React, {Component} from "react";
import AgePersonne from "./AgePersonne/AgePersonnes";

class Personne extends Component {
    render() {
        return (
            <>
                <h1>{this.props.nom}</h1>
                <AgePersonne age = {this.props.age}/>
                <p>Sexe {this.props.sexe ? "homme" : "femme"}</p>
                <button onClick={this.props.click}>Anniverssaire</button>
            </>
        );
    }
    
}

export default Personne;