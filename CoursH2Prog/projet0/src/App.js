import React, {Component} from "react";
import Personne from "./components/Personnes/Personne";
import Horloge from "./containers/Horloge/Horloge";
import AgePersonne from "./components/Personnes/AgePersonne/AgePersonnes";

class App extends Component {

    state = {
        personnes : [
            {id: 1, nom: "Michel", age: 31, sexe: true},
            {id: 2, nom: "Tia", age: 25, sexe: false},
            {id: 3, nom: "Mika", age: 11, sexe: true},

        ]
    }

    anniverssaireHandler = (id) => {
        const numPersonne = this.state.personnes.findIndex(element => {
            return element.id === id;
        })

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

                {
                    this.state.personnes.map((personnes, index) => {
                        return (
                            <Personne key={personnes.id} {...personnes} click={() => this.anniverssaireHandler(personnes.id)}>
                                <AgePersonne age={personnes.age}/>
                            </Personne>
                        );
                    })
                }
            </>
        );
    }
}

export default App;