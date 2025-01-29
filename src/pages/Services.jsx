import React from "react";
import "../css/Services.css"

const Services = () => {
  return (
    <main>
      <section>
        <div className="pt-3">
          <img className="img-fluid " src="./public/img/banner.jpg" />
        </div>
      </section>
      <section className="container my-0 mt-5  ">
        <div className="text-center">
          <h1 className="text-uppercase">Mon offre de services</h1>
          <p>Voici les pretations sur lesquelles je peut intervenir.</p>
          <div className="custom-border m-auto"></div>
        </div>
        <div className="row mt-5 text-center justify-content-center">
          <article className="col-md-6 col-lg-3 shadow-sm  bg-white rounded m-2 p-5 ">
            <h3>
              <i class="card fa-solid fa-desktop"></i>
            </h3>
            <h4 className="text-uppercase">Ux Design</h4>
            <p>
              <strong>L’UX Design </strong>est une méthode de conception centrée
              sur l’utilisateur. Son but est d’offrir une expérience de
              navigation optimale à l’internaute.
            </p>
          </article>
          <article className="col-md-6 col-lg-3 shadow-sm rounded bg-white  m-2 p-5">
            <h3>
              <i class="card fa-solid fa-file-code"></i>
            </h3>
            <h4 className="text-uppercase">Développement Web</h4>
            <p>
              Le <strong>développement de sites web </strong>repose sur
              l’utilisation des langages HTML, CSS, JavaScript et PHP.
            </p>
          </article>
          <article className="col-md-6 col-lg-3 shadow-sm rounded bg-white  m-2 p-5">
            <h3>
              <i class=" card fa-solid fa-magnifying-glass-dollar"></i>
            </h3>
            <h4 className="text-uppercase">Référencement</h4>
            <p>
              Le référencement naturel d’un site, aussi appelé SEO, consiste à
              mettre des techniques en œuvre pour améliorer sa position dans les
              résultats des moteurs de recherche.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Services;
