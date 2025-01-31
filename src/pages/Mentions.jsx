import React from "react";

const Mentions = () => {
  return (
    <main>
      <div className="container text-center py-4">
        <h1 className="text-uppercase">Mentions légales</h1>
        <div className="custom-border m-auto"></div>
      </div>
      <div className="container">
        <div className="accordion rounded border" id="accordionExample">
          <div className="acordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Editeur du site
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show "
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <h5>John Doe</h5>
                <address>
                  <p className="m-0">
                    40 Rue Laure Diebold, <br />
                    69009 Lyon, France
                  </p>
                  <p>Téléphone : 06 20 30 40 50</p>
                </address>
              </div>
            </div>
          </div>
          <div className="acordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                Hébergeur
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse accordion-body"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <h5>John Doe</h5>
              <address>
                <p className="m-0">
                  40 Rue Laure Diebold, <br />
                  69009 Lyon, France
                </p>
                <p>Téléphone : 06 20 30 40 50</p>
              </address>
            </div>
          </div>
          <div className="acordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="true"
                aria-controls="collapseThree"
              >
                Crédits
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse  accordion-body"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <h5>John Doe</h5>
              <address>
                <p className="m-0">
                  40 Rue Laure Diebold, <br />
                  69009 Lyon, France
                </p>
                <p>Téléphone : 06 20 30 40 50</p>
              </address>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Mentions;
