import React from 'react'

export default function Articles(props) {
  return (
    <div className="col-4">
      <div className={props.article.stock === 1 ? "card-body bg-warning" : props.article.stock === 0 ? "card-body bg-danger" : "card-body"}>
        <img src={props.article.img} className="card-img-top img-fluid" alt="boisson" />
        <div className="card-body">
          <h5 className="card-title">{props.article.nom}</h5>
          <p className="card-text">Prix : {props.article.prix}$</p>
          <p className="card-text">{props.article.stock === 0 ? `Rupture de stock` : `Stock : ${props.article.stock} unités`}</p>
          <button onClick={props.acheter} className={props.article.stock === 0 ? "d-none btn btn-success" : "btn btn-success"}>Acheter</button>
        </div>
      </div>
    </div>
  )
}