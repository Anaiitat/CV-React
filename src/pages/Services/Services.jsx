import React from "react";
import "./Services.css";
import Banner from "/src/components/Banner.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faFileCode, faMagnifyingGlassDollar } from "@fortawesome/free-solid-svg-icons";

function Service(props) {
  return (
    <article className="col-md-6 col-lg-3 shadow-sm bg-white rounded m-3 p-5 ">
      <FontAwesomeIcon icon={props.icon} className="font-service pb-3" />
      <h4 className="text-uppercase">{props.titre}</h4>
      <p>{props.description}</p>
    </article>
  );
}

export default function Services() {
  return (
    <main id="services">
      <Banner />
      <section className="container-fluid  my-5  ">
        <div className="text-center ">
          <h1 className="text-uppercase">Mon offre de services</h1>
          <p>Voici les pretations sur lesquelles je peut intervenir.</p>
          <div className="custom-border m-auto"></div>
        </div>
        <div className="row my-5 text-center justify-content-center">
          <Service
            icon={faDesktop}
            titre="Ux Design"
            description={
              <>
                <strong>L’UX Design </strong> est une méthode de conception centrée sur l’utilisateur. Son but est d’offrir une expérience de navigation optimale à l’internaute.
              </>
            }
          />
          <Service
            icon={faFileCode}
            titre="Développement Web"
            description={
              <>
                Le <strong>développement de sites web </strong>repose sur l’utilisation des langages <span className="underline">HTML</span>, <span className="underline">CSS</span>, JavaScript et <span className="underline">PHP</span>.
              </>
            }
          />
          <Service
            icon={faMagnifyingGlassDollar}
            titre="Référencement"
            description={
              <>
                Le <strong>référencement naturel d’un site </strong>, aussi appelé <span className="underline">SEO</span>, consiste à mettre des techniques en œuvre pour <i>améliorer sa position</i> dans les résultats des moteurs de recherche.
              </>
            }
          />
        </div>
      </section>
    </main>
  );
}
