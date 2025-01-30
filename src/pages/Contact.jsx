import React from "react";
import "../css/Contact.css";

const Contact = () => {
  return (
    <main>
      <div className="container-fluid background py-3">
        <div className=" container rounded py-5 bg-white ">
          <div className=" text-center mb-5">
            <h1 className="text-uppercase">Me Contacter</h1>
            <p>
              Pour me contacter en vue d'un entretien ou d'une future
              collaboration, merci de remplir le formulaire de contact.
            </p>
            <div className="custom-border m-auto"></div>
          </div>
          <div className="row container ">
            <div className="col-md-12 col-lg-6 ">
              <h2>Formulaire de contact</h2>
              <div className="border border-primary"></div>
              <form className="mt-4 text-center">
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="form-control mb-3"
                  required="required"
                />
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="form-control mb-3"
                  required="required"
                />
                <input
                  type="tel"
                  placeholder="Votre numéro de téléphone"
                  className="form-control mb-3"
                  required="required"
                />
                <input
                  type="text"
                  placeholder="Sujet"
                  className="form-control mb-3"
                  required="required"
                />
                <textarea
                  placeholder="Votre message"
                  className="form-control mb-3"
                  required="required"
                  rows="6"
                ></textarea>
                <button type="submit" class="btn btn-primary">
                  Envoyer
                </button>
              </form>
            </div>
            <div className=" col-md-12 col-lg-6 ">
              <h2>Mes coordonées</h2>
              <div className="border border-primary"></div>
              <address className="h-auto mt-4">
                <p className="m-0">
                  <i class="fa-solid fa-location-dot"></i> 40 Rue Laure Diebold,
                  69009 Lyon, France
                </p>
                <p>
                  <i class="fa-duotone fa-solid fa-mobile-button"></i> 06 20 30
                  40 50
                </p>
              </address>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6271524621757!2d4.796403976789853!3d45.77866197108087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1738243768823!5m2!1sfr!2sfr"
                width="100%"
                height="300"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
