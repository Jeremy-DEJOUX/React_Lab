import React, {Component} from "react";
import Personne from "./components/Personnes/Personne";
import Horloge from "./containers/Horloge/Horloge";

class App extends Component {

    state = {
        personnes : [
            {nom: "Michel", age: 31, sexe: true},
            {nom: "Tia", age: 25, sexe: false},
            {nom: "Mika", age: 11, sexe: true},

        ]
    }

    anniverssaireHandler = () => {
        const newPersonnes = [...this.state.personnes];
        newPersonnes[0].age++;
        newPersonnes[1].age++;
        newPersonnes[2].age++;
        this.setState({personnes:newPersonnes});
    }

    render() {
        return (
            <>
                <button onClick={this.anniverssaireHandler}>Anniverssaire</button>
                <Horloge />
                <Personne {...this.state.personnes[0]}/>
                <Personne {...this.state.personnes[1]}/>
                <Personne {...this.state.personnes[2]}/>
            </>
        )
    }
}

export default App;