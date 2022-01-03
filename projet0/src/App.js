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

    render() {
        return (
            <>
                <Horloge />
                <Personne {...this.state.personnes[0]}/>
                <Personne {...this.state.personnes[1]}/>
                <Personne {...this.state.personnes[2]}/>
            </>
        )
    }
}

export default App;