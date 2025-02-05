import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import "./Footer.css";

const Footer = () => {

    const location = useLocation(); 

    return (
      <footer className="pt-5 mt-5">
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
                <a href="https://github.com/github-john-doe" rel="nofollow" target="blank" className="p-2 ">
                  <FontAwesomeIcon icon={faGithub} className="reseaux" />
                </a>
                <a href="https://x.com/?lang=fr" rel="nofollow" target="blank" className="p-2">
                  <FontAwesomeIcon icon={faTwitter} className="reseaux" />
                </a>
                <a href="https://www.linkedin.com/feed/" rel="nofollow" target="blank" className="p-2">
                  <FontAwesomeIcon icon={faLinkedin} className="reseaux" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5>Liens utiles</h5>
              <ul className="ps-1">
                <li>
                  <FontAwesomeIcon icon={faChevronRight} className="chevron" />
                  <Link to="/" className="link">
                    {" "}
                    Accueil
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} className="chevron" />
                  <Link to="/#apropos" className="link">
                    {" "}
                    A propos
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} className="chevron" />
                  <Link to="/services" className="link">
                    {" "}
                    Services
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} className="chevron" />
                  <Link to="/contact" className="link">
                    {" "}
                    Me contacter
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} className="chevron" />
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
                  <FontAwesomeIcon icon={faChevronRight} className="chevron" />
                  <Link to="/realisation" className="link">
                    {" "}
                    Fresh food
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} className="chevron" />
                  <Link to="/realisation" className="link">
                    {" "}
                    Restaurant Akira
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} className="chevron" />
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
                  <FontAwesomeIcon icon={faChevronRight} className="chevron" />
                  <Link to="/blog" className="link">
                    {" "}
                    Coder son site en HTML/CSS
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} className="chevron" />
                  <Link to="/blog" className="link">
                    {" "}
                    Vendre ses produits sur le web
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} className="chevron" />
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
          <FontAwesomeIcon icon={faCopyright} className="copyright" /> Designed by John Doe
        </p>
      </footer>
    );

}

export default Footer;