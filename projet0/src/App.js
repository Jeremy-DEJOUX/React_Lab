import React, {Component} from "react";
import Personne from "./Personne";

class App extends Component {
    render() {
        return (
            <>
                <Personne nom="Jeremy" age="12" sexe="M"/>
                <Personne nom="Julien" age="23" sexe="M"/>
                <Personne nom="Michel" age="45" sexe="F"/>
            </>
        )
    }
}

export default App;