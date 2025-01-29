import React from "react";
import FreshFood from "/public/img/portfolio/fresh-food.jpg";
import Restaurant from "/public/img/portfolio/restaurant-japonais.jpg";
import Espace from "/public/img/portfolio/espace-bien-etre.jpg";

function CardRealisation() {
  const realisations = [
    {
      id: 1,
      name: "Fresh food",
      description: "Réalisation d'un site avec commande en ligne.",
      technologie: "PHP et MySQL",
      img: {
        src: FreshFood,
      },
    },
    {
      id: 2,
      name: "Restaurant Akira",
      description: "Réalisation d'un site vitrine.",
      technologie: "WordPress",
      img: {
        src: Restaurant,
      },
    },
    {
      id: 3,
      name: "Espace bien-être",
      description:
        "Réalisation d'un site vitrine pour un praticien de bien-être.",
      technologie: "HTML/CSS",
      img: {
        src: Espace,
      },
    },
  ];

  return (
    <div className="row mt-4 text-center align-items-start justify-content-center">
      {realisations.map((realisation, index) => (
        <article
          key={realisation.id}
          className=" card col-md-6 col-lg-3 p-0 m-3 "
        >
          <img src={realisation.img.src} className="card-img-top" />
          <div className="card-body ">
            <h3 className="card-title">{realisation.name}</h3>
            <p className="card-text">{realisation.description}</p>
            <button className="btn btn-outline-primary ">Voir</button>
          </div>
          <div className="card-footer">
            <small>Site réalisé avec {realisation.technologie}</small>
          </div>
        </article>
      ))}
    </div>
  );
}

export default CardRealisation;
