import React from "react";
import "../css/App.css";

const Realisation = () => {
  return (
    <main>
      <div className="pt-3">
        <img className="img-fluid " src="./public/img/banner.jpg" />
      </div>
      <section className="container mt-5">
        <div className="text-center">
          <h1 className="text-uppercase">Portfolio</h1>
          <p>Voici quelques-unes de mes réalisations.</p>
          <div className="custom-border m-auto"></div>
        </div>
        <div className="row mt-5 text-center justify-content-center">
          <article className="col-md-6 col-lg-3 shadow-sm  bg-white rounded m-2 p-5 "></article>
          <article className="col-md-6 col-lg-3 shadow-sm  bg-white rounded m-2 p-5 "></article>
          <article className="col-md-6 col-lg-3 shadow-sm  bg-white rounded m-2 p-5 "></article>
        </div>
      </section>
    </main>
  );
};

export default Realisation;
