import React, {Component} from "react";
import Livre from "./Livre/Livre";
import FormulaireAjout from "../FormulaireAjout/FormulaireAjout";

class Livres extends Component {
    state = {
        livres : [
          {id: 1, titre: "Le champ du loup", auteur: "Michel", nbPages:200},
          {id: 2, titre: "Aidez-le", auteur: "Jean-Sartre", nbPages: 23},
          {id: 3, titre: "Il était deux fois", auteur: "Amélie Nothomb", nbPages: 645}
        ],
        lastIdLivre : 8
    }

    handleSuppressionLivre = (id) => {
        const livreIndexTab = this.state.livres.findIndex(l => {
            return l.id === id;
        });

        const newLivres = [...this.state.livres];
        newLivres.splice(livreIndexTab,1);

        this.setState({livres:newLivres});
    }

    handleAjoutLivre = (titre, auteur, nbPages) => {
        const newLivre = {
            id: this.lastIdLivre + 1,
            titre:titre,
            auteur:auteur,
            nbPages:nbPages
        };

        const newListeLivres = [...this.state.livres];
        newListeLivres.push(newLivre);

        this.setState(oldState => {
            return  {
                livres: newListeLivres,
                lastIdLivre: oldState.lastIdLivre + 1
            }
        })
    }

    render (){
        return (
            <>
                <table className="table text-center">
                    <thead>
                        <tr className="table-dark">
                            <th>Titre</th>
                            <th>Auteur</th>
                            <th>Nombre de pages</th>
                            <th colSpan={2}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.livres.map(livres => {
                                return (
                                    <tr key={livres.id}>
                                        <Livre
                                            titre={livres.titre}
                                            auteur={livres.auteur}
                                            nbPages={livres.nbPages}
                                            suppression={() => this.handleSuppressionLivre(livres.id)}
                                        />
                                    </tr>
                                );
                            })
                        }
                        
                    </tbody>
                </table>
                
                {this.props.ajoutLivre && <FormulaireAjout validation = {this.handleAjoutLivre}/>}
            </>
        );
    }
}

export default Livres;