import React from "react";


const Accueil = () => {

    //Bouton scroll a propos
  const scrollToAPropos = () => {
    const element = document.getElementById("apropos");
    element.scrollIntoView({ behavior: "smooth" });
  };
  
  //Progress Bar
  const progressValue = [90,80,70,60,50];

  return (
    <main>
      <section className=" text-white">
        <div className="position-relative">
          <img
            className=" card-img"
            src="./public/img/hero-bg.jpg"
            alt="background"
          />
          <div
            className="position-absolute top-0 left-0 w-100 h-100 bg-dark"
            style={{ opacity: 0.3 }}
          ></div>
          <div className="card-img-overlay text-center d-flex flex-column justify-content-center align-items-center ">
            <h1 className="pb-2">Bonjour, je suis John Doe</h1>
            <h2 className="pb-2">Développeur web full stack</h2>
            <button className="btn btn-primary" onClick={scrollToAPropos}>
              En savoir plus
            </button>
          </div>
        </div>
      </section>
      <section id="apropos ">
        <div className="row shadow p-5 m-5 bg-body rounded ">
          <article className="col-md-6 ">
            <h2>A Propos</h2>
          </article>
          <article className="col-md-6 ">
            <div className=" ">
              <img
                src="./public/img/john-doe-about.jpg"
                alt="John Doe"
                className=" rounded img-fluid"
              />
              <div>
                <h2>Mes Compétences</h2>
                <div className="mb-3">
                  <p>HTML5 90%</p>
                  <div className="progress">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: `${progressValue[0]}%` }}
                      aria-valuenow={progressValue}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="mb-3">
                  <p>CSS 80%</p>
                  <div className="progress">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: `${progressValue[1]}%` }}
                      aria-valuenow={progressValue}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="mb-3">
                  <p>JAVASCRIPT 70%</p>
                  <div className="progress">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: `${progressValue[2]}%` }}
                      aria-valuenow={progressValue}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="mb-3">
                  <p>PHP 60%</p>
                  <div className="progress">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: `${progressValue[3]}%` }}
                      aria-valuenow={progressValue}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="mb-3">
                  <p>REACT 50%</p>
                  <div className="progress">
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: `${progressValue[4]}%` }}
                      aria-valuenow={progressValue}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Accueil;
