import React from "react";
import Coder from "../img/blog/coder.jpg";
import Croissance from "../img/blog/croissance.jpg";
import Google from "../img/blog/google.jpg";
import Screens from "../img/blog/screens.jpg";
import Seo from "../img/blog/seo.jpg";
import Technos from "../img/blog/technos.png";

function CardBlogs(props) {
  return (
    <article className=" card col-md-4 col-lg-3 p-0 m-3 ">
      <img src={props.img} alt={props.alt} className="card-img-top" />
      <div className="card-body">
        <h3>{props.titre}</h3>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button className="btn btn-primary ">Lire la suite</button>
      </div>
      <div className="card-footer">
        <small>Publié le {props.date}</small>
      </div>
    </article>
  );
}

export default function CardBlog() {
  return (
    <div className="row mt-4  align-items-start justify-content-center">
      <CardBlogs img={Coder} alt="Coder son site en HTML/CSS" titre="Coder son site en HTML/CSS" date="22 août 2022" />
      <CardBlogs img={Croissance} alt="Vendre ses produits sur le web" titre="Vendre ses produits sur le web" date="1 août 2022" />
      <CardBlogs img={Google} alt="Se positionner sur Google" titre="Se positionner sur Google" date="22 août 2022" />
      <CardBlogs img={Screens} alt="Coder en responsive design" titre="Coder en responsive design" date="31 juillet 2022" />
      <CardBlogs img={Seo} alt="Technique de référencement" titre="Technique de référencement" date="30 juillet 2022" />
      <CardBlogs img={Technos} alt="Apprendre à coder" titre="Apprendre à coder" date="12 juillet 2022" />
    </div>
  );
}
