import React, {Component} from "react";
import Bouton  from "../../components/Boutons/Bouton";

class FormulaireAjout extends Component{
    state = {
        titreSaisie : "",
        auteurSaisie : "",
        nbPagesSaisie :""
    }

    handleValidationForm = (event) => {
        event.preventDefault();
        this.props.validation(this.state.titreSaisie, this.state.auteurSaisie, this.state.nbPagesSaisie);
    }

    render() {
        return (
            <>
                <h2 className="text-center text-primary" style={{fontFamily: 'Prompt'}}>Affichage du formulaire d'ajout</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="titre" className="form-label">Titre du livre</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="titre"
                            value={this.state.titreSaisie}
                            onChange={(event) => this.setState({titreSaisie:event.target.value})}    
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="auteur" className="form-label">Auteur</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="auteur"
                            value={this.state.auteurSaisie}
                            onChange={(event) => this.setState({auteurSaisie:event.target.value})}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="nbPages" className="form-label">Nombre de pages</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="auteur"
                            value={this.state.nbPagesSaisie}
                            onChange={(event) => this.setState({nbPagesSaisie:event.target.value})}
                        />
                    </div>

                    <Bouton typeBtn="btn-primary" click={this.handleValidationForm}>Valider</Bouton>
                </form>
            </>
        );
    }
}

export default FormulaireAjout;