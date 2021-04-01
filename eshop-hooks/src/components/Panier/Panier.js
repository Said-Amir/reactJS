import React from 'react'

export default function Panier(props) {
    return (
        <li className="list-group-item mx-auto w-75 d-flex justify-content-between align-items-center">
          Produit : {props.panier.nom} || Unités : 1 
          <button onClick={props.rendre} className="btn btn-danger">Rendre</button>
        </li>
    )
}