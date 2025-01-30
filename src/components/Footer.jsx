import React from "react";

const Footer = () => {
    return (
      <footer className="pt-5">
        <div className="container-fluid px-5">
          <div className="row px-5 ">
            <div className="col-lg-3 col-md-6 ">
              <h5>John Doe</h5>
              <address>
                <p className="m-0">
                  40 Rue Laure Diebold, <br />
                  69009 Lyon, France
                </p>
                <p>Téléphone : 06 20 30 40 50</p>
              </address>
              <div>
                <a className="p-2 ">
                  <i class="fa-brands fa-github fa-2xl"></i>
                </a>
                <a className="p-2">
                  <i class="fa-brands fa-twitter fa-2xl"></i>
                </a>
                <a className="p-2">
                  <i class="fa-brands fa-linkedin fa-2xl"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5>Liens utiles</h5>
              <a>
                <i class="fa-solid fa-chevron-right"></i>vd
              </a>
              <a>
                <i class="fa-solid fa-chevron-right"></i>
              </a>
              <a>
                <i class="fa-solid fa-chevron-right"></i>
              </a>
              <a>
                <i class="fa-solid fa-chevron-right"></i>
              </a>
              <a>
                <i class="fa-solid fa-chevron-right"></i>
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5>Mes dernières réalisations</h5>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5>Mes derniers articles</h5>
            </div>
          </div>
        </div>
      </footer>
    );

}

export default Footer;