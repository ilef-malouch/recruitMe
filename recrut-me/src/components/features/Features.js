import React from "react";
import "./Features.css";
import img1 from "../../images/categories/sante.png";
import img2 from "../../images/categories/computer.png";
import img3 from "../../images/categories/balance.png";
import img4 from "../../images/categories/atom.png";
import img5 from "../../images/categories/money.png";
import img6 from "../../images/categories/fork.png";
import img7 from "../../images/categories/blueprint.png";
import img8 from "../../images/categories/make-up.png";
import img9 from "../../images/categories/teacher.png";

export default function Features() {
  return (
    <section className="section-big main-color">
      <div className="container">
        <div className="row">
          <div className="col-md-12 pb-20 text-center">
            <h2 className="section-title mb-10">
              <br />
              <span>Job Categories</span>
            </h2>
            <p className="section-sub-title">
              If you are searching for your dream job , your dream salary , your
              dream team you are in the right place .
            </p>
            <div className="exp-separator center-separator">
              <div className="exp-separator-inner"></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <ul className="i-list medium">
              <li className="i-list-item">
                <div className="icon">
                  <img src={img1} />
                </div>

                <div className="icon-content">
                  <h3 className="title">Fully Responsive Design</h3>
                  <p className="sub-title">
                    Offres d'emploi Santé , Paramédical Optique , Soin ,
                    Administratif et technique .
                  </p>
                </div>
                <div className="iconlist-timeline"></div>
              </li>
              <li className="i-list-item">
                <div className="icon">
                  <img src={img2} />
                </div>

                <div className="icon-content">
                  <h3 className="title">Easy &amp; Clean Code</h3>
                  <p>
                    Offres d'emploi Développement web , UI/UX , Intelligence
                    artificielle , sécurité .
                  </p>
                </div>
                <div className="iconlist-timeline"></div>
              </li>
              <li className="i-list-item">
                <div className="icon">
                  <img src={img3} />
                </div>

                <div className="icon-content">
                  <h3 className="title">24/7 Customer Support</h3>
                  <p>
                    Offre d'emploi Avocat , Juge , Administrateur judiciaire ,
                    Notaire
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="i-list medium">
              <li className="i-list-item">
                <div className="icon">
                  <img src={img4} />
                </div>
                <div className="icon-content">
                  <h3 className="title">Endless Possibilites</h3>
                  <p className="sub-title">
                    Offres d'emploi biologist , chimist , physicien
                  </p>
                </div>
                <div className="iconlist-timeline"></div>
              </li>
              <li className="i-list-item">
                <div className="icon">
                  <img src={img5} />
                </div>
                <div className="icon-content">
                  <h3 className="title">Free Lifetime Updates</h3>
                  <p>
                    Offres d'emploi finances , marketing , comptabilité
                    ,buisniss
                  </p>
                </div>
                <div className="iconlist-timeline"></div>
              </li>
              <li className="i-list-item">
                <div className="icon">
                  <img src={img6} />
                </div>
                <div className="icon-content">
                  <h3 className="title">Clean &amp; Modern Design</h3>
                  <p>
                    Offres d'emploi restauration , serveur , cuisinier ,
                    receptionnist
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="i-list medium">
              <li className="i-list-item">
                <div className="icon">
                  <img src={img7} />
                </div>
                <div className="icon-content">
                  <h3 className="title">Useful Shortcodes</h3>
                  <p className="sub-title">
                    Offres d'emploi architecte ,architecte d'intérieur
                    ,décorateur d'intérieur
                  </p>
                </div>
                <div className="iconlist-timeline"></div>
              </li>
              <li className="i-list-item">
                <div className="icon">
                  <div className="icon">
                    <img src={img8} />
                  </div>
                </div>
                <div className="icon-content">
                  <h3 className="title">Multipurpose Concept</h3>
                  <p>Ofrres d'emploi barbier , coiffeuse , Diététicien ,</p>
                </div>
                <div className="iconlist-timeline"></div>
              </li>
              <li className="i-list-item">
                <div className="icon">
                  <img src={img9} />
                </div>
                <div className="icon-content">
                  <h3 className="title">Crafted With Love</h3>
                  <p>Assistant , Animateur , Chercheur ,Conseiller</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
