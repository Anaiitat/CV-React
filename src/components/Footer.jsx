import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {

    const location = useLocation(); 

    return (
      <footer className="pt-5">
        <div className="container-fluid ">
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
                <a
                  href="https://github.com/github-john-doe"
                  rel="nofollow"
                  target="blank"
                  className="p-2 "
                >
                  <i class="fa-brands fa-github fa-2xl"></i>
                </a>
                <a
                  href="https://x.com/?lang=fr"
                  rel="nofollow"
                  target="blank"
                  className="p-2"
                >
                  <i class="fa-brands fa-twitter fa-2xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com/feed/"
                  rel="nofollow"
                  target="blank"
                  className="p-2"
                >
                  <i class="fa-brands fa-linkedin fa-2xl"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5>Liens utiles</h5>
              <ul className="ps-1">
                <li>
                  <i class="fa-solid fa-chevron-right i-chevron"></i>
                  <Link to="/" className="link">
                    {" "}
                    Accueil
                  </Link>
                </li>
                <li>
                  <i class="fa-solid fa-chevron-right i-chevron"></i>
                  <Link to="/#apropos" className="link">
                    {" "}
                    A propos
                  </Link>
                </li>
                <li>
                  <i class="fa-solid fa-chevron-right i-chevron"></i>
                  <Link to="/services" className="link">
                    {" "}
                    Services
                  </Link>
                </li>
                <li>
                  <i class="fa-solid fa-chevron-right i-chevron"></i>
                  <Link to="/contact" className="link">
                    {" "}
                    Me contacter
                  </Link>
                </li>
                <li>
                  <i class="fa-solid fa-chevron-right i-chevron"></i>
                  <Link to="/mentions" className="link">
                    {" "}
                    Mentions légale
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 ">
              <h5>Mes dernières réalisations</h5>
              <ul className="ps-1">
                <li>
                  <i class="fa-solid fa-chevron-right i-chevron"></i>
                  <Link to="/realisation" className="link">
                    {" "}
                    Fresh food
                  </Link>
                </li>
                <li>
                  <i class="fa-solid fa-chevron-right i-chevron"></i>
                  <Link to="/realisation" className="link">
                    {" "}
                    Restaurant Akira
                  </Link>
                </li>
                <li>
                  <i class="fa-solid fa-chevron-right i-chevron"></i>
                  <Link to="/realisation" className="link">
                    {" "}
                    Espace bien-être
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 ">
              <h5>Mes derniers articles</h5>
              <ul className="ps-1">
                <li>
                  <i class="fa-solid fa-chevron-right i-chevron"></i>
                  <Link to="/blog" className="link">
                    {" "}
                    Coder son site en HTML/CSS
                  </Link>
                </li>
                <li>
                  <i class="fa-solid fa-chevron-right i-chevron"></i>
                  <Link to="/blog" className="link">
                    {" "}
                    Vendre ses produits sur le web
                  </Link>
                </li>
                <li>
                  <i class="fa-solid fa-chevron-right i-chevron"></i>
                  <Link to="/blog" className="link">
                    {" "}
                    Se positionner sur Google
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="bg-dark m-0 text-center text-white mt-4 p-3">
          <i class="fa-regular fa-copyright i-copyright"></i> Designed by John Doe
        </p>
      </footer>
    );

}

export default Footer;