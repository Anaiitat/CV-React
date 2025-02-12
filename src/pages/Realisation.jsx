import React from "react";
import CardRealisation from "../components/CardRealisation"

const Realisation = () => {
  return (
    <main>
      <div className="banner"></div>
      <section className="container mt-5">
        <div className="text-center">
          <h1 className="text-uppercase">Portfolio</h1>
          <p>Voici quelques-unes de mes réalisations.</p>
          <div className="custom-border m-auto"></div>
        </div>
          <CardRealisation />
      </section>
    </main>
  );
};

export default Realisation;
