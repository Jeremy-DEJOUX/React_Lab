import React, {Component} from "react";

class Horloge extends Component {
    state = {
        date:new Date(),
        compteur : 1
    }

    tick = () => {
        this.setState((oldState, props) => {
            return {
                date : new Date(),
                compteur : oldState.compteur + 1
            }
        })
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    render() {
        return (
            <>
                <h2>Horloge : {new Date().toLocaleTimeString()}</h2>
                <div> Compteur : {this.state.compteur} </div>
            </>
            
        )
    }
}

export default Horloge;