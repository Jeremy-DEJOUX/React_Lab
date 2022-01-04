import React, {Component} from "react";
import Personne from "./components/Personnes/Personne";
import Horloge from "./containers/Horloge/Horloge";
import AgePersonne from "./components/Personnes/AgePersonne/AgePersonnes";

class App extends Component {

    state = {
        personnes : [
            {nom: "Michel", age: 31, sexe: true},
            {nom: "Tia", age: 25, sexe: false},
            {nom: "Mika", age: 11, sexe: true},

        ]
    }

    anniverssaireHandler = (numPersonne) => {
        const newPersonne = {...this.state.personnes[numPersonne]}; //on gènere une nouvelle personnes
        newPersonne.age++; //On ajoute 1 à l'age de la nouvelle personne

        const newTab = [...this.state.personnes]; //On gènere un nouveau tableau
        newTab[numPersonne] = newPersonne; //On change la personne
        this.setState({personnes : newTab}); //On active le changement

    }

    render() {
        return (
            <>
                <button onClick={this.anniverssaireHandler}>Anniverssaire</button>
                <Horloge />

                <Personne {...this.state.personnes[0]} click={() => this.anniverssaireHandler(0)}>
                    <AgePersonne age={this.state.personnes[0].age}/>
                </Personne>

                <Personne {...this.state.personnes[1]} click={() => this.anniverssaireHandler(1)}>
                    <AgePersonne age={this.state.personnes[1].age}/>
                </Personne>

                <Personne {...this.state.personnes[2]} click={() => this.anniverssaireHandler(2)}>
                    <AgePersonne age={this.state.personnes[2].age}/>
                </Personne>
            </>
        )
    }
}

export default App;