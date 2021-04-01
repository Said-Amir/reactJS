import React, { useState } from 'react';
import './App.css'
import coca from '../../img/coca.jpg';
import fanta from '../../img/fanta.jpg';
import iceTea from '../../img/iceTea.jpg';
import Articles from '../Articles/Articles';
import Panier from '../Panier/Panier';

function App() {

  const [argent, setArgent] = useState(20);
  const [panier, setPanier] = useState([]);
  const [articles, setArticles] = useState([
    {
      nom: "Coca-cola",
      prix: 1,
      stock: 5,
      img: coca
    },
    {
      nom: "Fanta",
      prix: 1.5,
      stock: 5,
      img: fanta
    },
    {
      nom: "Ice Tea",
      prix: 2,
      stock: 5,
      img: iceTea
    }
  ]);

  let acheter = (i) => {

    if (argent>articles[i].prix && articles[i].stock > 0) {
      // Paiement
      setArgent(argent-articles[i].prix);
      
      // Stock
      let myArticle = [...articles];
      myArticle[i].stock--;
      setArticles(myArticle);

      // Ajout dans la liste 
      let myPanier = [...panier];
      myPanier.push(articles[i])
      setPanier(myPanier)
    }

  }

  let rendre = (i) => {

    let myPanier = [...panier];
    let myArticle = [...articles];
    setArgent(argent+myPanier[i].prix);
    myArticle[myArticle.indexOf(myPanier[i])].stock++;
    myPanier.splice(i,1);
    setPanier(myPanier);
    setArticles(myArticle);
    
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-5">Mon argent : {argent}$</h2>
      <div className="row">

        {
          articles.map((e,i)=>{
            return (
              <Articles
                key = {i}
                article = {articles[i]}
                acheter = {() => acheter(i)}
              />
            )
          })
        }

      </div>
      <ul className="list-group mt-5">
        {
          panier.map((e,i)=>{
            return (
              <Panier
                panier = {panier[i]}
                rendre = {() => rendre(i)}
              />
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;