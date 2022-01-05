import React, {Component} from "react";
import Livre from "./Livre/Livre";

class Livres extends Component {
    state = {
        livres : [
          {id: 1, titre: "Le champ du loup", auteur: "Michel", nbPages:200},
          {id: 2, titre: "Aidez-le", auteur: "Jean-Sartre", nbPages: 23},
          {id: 3, titre: "Il était deux fois", auteur: "Amélie Nothomb", nbPages: 645}
        ]
      }

    render (){
        return (
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
                                    />
                                </tr>
                            );
                        })
                    }
                    
                </tbody>
            </table>
        );
    }
}

export default Livres;