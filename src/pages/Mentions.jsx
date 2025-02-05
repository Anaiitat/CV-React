import React from "react";
import "../css/Mentions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMobileButton, faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";

const Mentions = () => {
  return (
    <main>
      <div className="container">
        <div className=" text-center py-4">
          <h1 className="text-uppercase">Mentions légales</h1>
          <div className="custom-border m-auto"></div>
        </div>
        <div className="accordion py-4" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header " id="headingOne">
              <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Editeur du site
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <h2>John Doe</h2>
                <address className="h-auto mt-2">
                  <p className="m-0">
                    <FontAwesomeIcon icon={faLocationDot} /> 40 Rue Laure Diebold
                    <br /> 69009 Lyon, France
                  </p>
                  <p className="m-0">
                    <FontAwesomeIcon icon={faMobileButton} />
                    <a target="blank" href="0620304050">
                      {" "}
                      06 20 30 40 50
                    </a>
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <a target="blank" href="mailto:john.doe@gmail.com">
                      {" "}
                      john.doe@gmail.com
                    </a>
                  </p>
                </address>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Hébergeur
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <h2>Always Data</h2>
                <address className="m-0">
                  <p>
                    91 rue du Faubourg Saint Honoré <br />
                    75008 Paris
                  </p>
                  <p className="m-0">
                    <FontAwesomeIcon icon={faGlobe} />
                    <a href="www.alwaysdata.com"> www.alwaysdata.com</a>
                  </p>
                </address>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Crédits
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <h2>Crédits</h2>
                <p>Site développé par John Doe, étudiant du CEF.</p>
                <p>
                  Les images libres de droit sont issues du site{" "}
                  <a href="https://pixabay.com/fr/" rel="nofollow" target="blank">
                    {" "}
                    Pixabay
                  </a>
                  .
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
