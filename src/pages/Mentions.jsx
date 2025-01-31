import React from "react";
import "../css/Mentions.css"

const Mentions = () => {
  return (
    <main>
      <div className="container">
        <div className=" text-center py-4">
          <h1 className="text-uppercase">Mentions légales</h1>
          <div className="custom-border m-auto"></div>
        </div>
        <div class="accordion py-4" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header " id="headingOne">
              <button
                class="accordion-button collapsed "
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
              class="accordion-collapse collapse "
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <h2>John Doe</h2>
                <address className="h-auto mt-2">
                  <p className="m-0">
                    <i class="fa-solid fa-location-dot"></i> 40 Rue Laure
                    Diebold
                    <br /> 69009 Lyon, France
                  </p>
                  <a target="blank" href="0620304050" className="m-0">
                    <i className=" fa-solid fa-mobile-button"></i> 06 20 30 40
                    50
                    <br />
                  </a>
                  <a target="blank" href="mailto:john.doe@gmail.com">
                    <i class=" fa-solid fa-envelope"></i> john.doe@gmail.com
                  </a>
                </address>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Hébergeur
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <h2>Always Data</h2>
                <address className="m-0">
                  <p>
                    91 rue du Faubourg Saint Honoré <br />
                    75008 Paris
                  </p>
                  <a href="www.alwaysdata.com">
                    <i class="fa-solid fa-globe"></i> www.alwaysdata.com
                  </a>
                </address>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Crédits
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <h2>Crédits</h2>
                <p>Site développé par John Doe, étudiant du CEF.</p>
                <p>
                  Les images libres de droit sont issues du site <a href="https://pixabay.com/fr/" rel="nofollow" target="blank"
                  > Pixabay
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Mentions;
