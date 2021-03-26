import React, { Component } from 'react';

class Perso extends Component{

    render(){
        return(
            <div>
                <p>Je m'appelle {this.props.nom} j'ai {this.props.age} ans et j'habite {this.props.adresse} et je suis appelé du composant Perso.js</p>
                <button onClick={() => {this.props.maFonction()}}>Test</button>
            </div>
        )
    }
}

export default Perso;