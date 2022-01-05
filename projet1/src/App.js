import React, {Component} from 'react';
import TitreH1 from './components/Titres/TitreH1';
import Bouton from './components/Boutons/Bouton';
import Livres from './containers/Livres/Livres';

class App extends Component{
  render () {
    return (
      <div className="container">
        <TitreH1>Pages lisant les livres</TitreH1>
        <Livres></Livres>
        <Bouton typeBtn="btn-success" css="w-100" click={() => console.log("Ajout")}>Ajouter</Bouton>
      </div>
    );
  }
  
}

export default App;