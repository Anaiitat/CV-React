import React from "react";
import FreshFood from "../img/portfolio/fresh-food.jpg";
import Restaurant from "../img/portfolio/restaurant-japonais.jpg";
import Espace from "../img/portfolio/espace-bien-etre.jpg";


function CardRealisations(props){
  return (
    <article className=" card col-md-6 col-lg-3 p-0 m-3 ">
      <img src={props.img} alt={props.alt} className="card-img-top" />
      <div className="card-body ">
        <h3 className="card-title">{props.titre}</h3>
        <p>{props.description}</p>
        <button className="btn btn-outline-primary ">Voir</button>
      </div>
      <div className="card-footer">
        <small>Site réalisé avec {props.tech}</small>
      </div>
    </article>
  );
}

export default function CardRealisation(){
  return (
    <div className="row my-4 text-center align-items-start justify-content-center">
      <CardRealisations alt="Panier de fruits" img={FreshFood} titre="Fresh food" description="Réalisation d'un site avec commande en ligne." tech="PHP et MySQL" />
      <CardRealisations alt="Menu Sushis" img={Restaurant} titre="Restaurant Akira" description="Réalisation d'un site vitrine." tech="WordPress" />
      <CardRealisations alt="Espace bien-être" img={Espace} titre="Espace bien-être" description="Réalisation d'un site vitrine pour un praticien de bien-être." tech="HTML/CSS" />
    </div>
  );
}




