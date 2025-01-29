import React from "react";
import { useState } from "react";
import Coder from "/public/img/blog/coder.jpg";
import Croissance from "/public/img/blog/croissance.jpg";
import Google from "/public/img/blog/google.jpg";
import Screens from "/public/img/blog/screens.jpg";
import Seo from "/public/img/blog/seo.jpg";
import Technos from "/public/img/blog/technos.png";

function CardBlog() {
    
    const [articles, setarticles] = useState([
      {
        id: 1,
        name: "Coder sont site en HTML/CSS",
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        date: "22 août 2022",
        img: {
          src: Coder,
        },
      },
      {
        id: 2,
        name: "Vendre ses produits sur le web",
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        date: "20 août 2022",
        img: {
          src: Croissance,
        },
      },
      {
        id: 3,
        name: "Se positionner sur Google",
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        date: "1 août 2022",
        img: {
          src: Google,
        },
      },
      {
        id: 4,
        name: "Coder en responsive design",
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        date: "31 juillet 2022",
        img: {
          src: Screens,
        },
      },
      {
        id: 5,
        name: "Techniques de référencement",
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        date: "30 juillet 2022",
        img: {
          src: Seo,
        },
      },
      {
        id: 6,
        name: "Apprendre à coder",
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        date: "12 juillet 2022",
        img: {
          src: Technos,
        },
      },
      
    ]);

  return (
    <div className="row mt-4  align-items-start justify-content-center">
      {articles.map((article) => (
        <article key={article.id} className=" card col-md-6 col-lg-3 p-0 m-3 ">
          <img src={article.img.src} className="card-img-top" />
          <div className="card-body">
            <h3>{article.name}</h3>
            <p className="card-text">{article.description}</p>
            <button className="btn btn-primary ">Lire la suite</button>
          </div>
          <div className="card-footer">
            <small>Publié le {article.date}</small>
          </div>
        </article>
      ))}
    </div>
  );
}

export default CardBlog;
